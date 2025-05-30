import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must be less than 500 characters')
      .required('Message is required'),
  });

  return (
    <div className={styles.contactFormContainer}>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Data:', values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.contactForm}>
            <Field type="text" name="name" placeholder="Your Name" />
            <ErrorMessage name="name" component="p" className={styles.error} />

            <Field type="email" name="email" placeholder="Your Email" />
            <ErrorMessage name="email" component="p" className={styles.error} />

            <Field as="textarea" name="message" placeholder="Your Message" />
            <ErrorMessage name="message" component="p" className={styles.error} />

            <button type="submit" disabled={isSubmitting}>
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
