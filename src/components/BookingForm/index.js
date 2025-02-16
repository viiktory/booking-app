import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './BookingForm.module.scss';

const today = new Date().toISOString().split('T')[0];

const validationSchema = Yup.object({
    location: Yup.string().required('Location is required'),
    checkIn: Yup.date()
        .required('Check-in date is required')
        .min(today, 'Check-in date cannot be in the past'),
    checkOut: Yup.date()
        .required('Check-out date is required')
        .min(Yup.ref('checkIn'), 'Check-out cannot be before check-in'),
    guests: Yup.number()
        .required('Number of guests is required')
        .positive('Guests must be at least 1')
        .integer('Guests must be a whole number'),
    rating: Yup.number()
        .nullable()
        .min(1, 'Rating must be at least 1')
        .max(5, 'Rating cannot be more than 5'),
    hasWebsite: Yup.boolean(),
    country: Yup.string(),
});

export default function BookingForm() {
    const navigate = useNavigate();

    const initialValues = {
        location: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        rating: '',
        hasWebsite: false,
        country: '',
    };

    const handleSubmit = (values) => {
        const queryString = new URLSearchParams(values).toString();
        navigate(`/hotels?${queryString}`);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <div className={styles.bookingFormContainer}>
                    <h2 className={styles.heading}>Find Your Perfect Hotel</h2>
                    <Form className={styles.formContainer}>
                        <div className={styles.fieldsContainer}>
                            <div className={styles.fieldGroup}>
                                <label>Location:</label>
                                <Field
                                    as="select"
                                    name="location"
                                    className={styles.select}
                                >
                                    <option value="">Select a location</option>
                                    <option value="New York">New York</option>
                                    <option value="Boston">Boston</option>
                                    <option
                                        value="Los Angeles
"
                                    >
                                        Los Angeles
                                    </option>
                                </Field>
                                <ErrorMessage
                                    name="location"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>Check-in Date:</label>
                                <Field
                                    type="date"
                                    name="checkIn"
                                    className={styles.input}
                                />
                                <ErrorMessage
                                    name="checkIn"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>Check-out Date:</label>
                                <Field
                                    type="date"
                                    name="checkOut"
                                    className={styles.input}
                                />
                                <ErrorMessage
                                    name="checkOut"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>Number of Guests:</label>
                                <Field
                                    type="number"
                                    name="guests"
                                    min="1"
                                    className={styles.input}
                                />
                                <ErrorMessage
                                    name="guests"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>Hotel Rating:</label>
                                <Field
                                    as="select"
                                    name="rating"
                                    className={styles.select}
                                >
                                    <option value="">Any</option>
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                </Field>
                                <ErrorMessage
                                    name="rating"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.checkboxGroup}>
                                <label>Has Website:</label>
                                <Field type="checkbox" name="hasWebsite" />
                                <ErrorMessage
                                    name="hasWebsite"
                                    component="div"
                                    className={styles.errorMessage}
                                />
                            </div>
                        </div>
                        <button className={styles.submitButton} type="submit">
                            Search Hotels
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}
