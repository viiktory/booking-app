import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiSend } from 'react-icons/fi';
import { formSchema } from '../../features/searchFormValidation';
import { FieldForm, AnimatedSection } from '../../components';
import styles from './BookingForm.module.scss';

const BookingForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: 1,
    },
  });

  const onSubmit = (data) => {
    const queryParams = {
      location: data.location || undefined,
      checkIn: data.checkIn || undefined,
      checkOut: data.checkOut || undefined,
      page: 1,
    };
    const query = new URLSearchParams(queryParams).toString();

    navigate(`/hotels?${query}`);

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} autoComplete="off">
        <AnimatedSection viewport={{ once: true }}>
          <div className={styles.formRow}>
            <FieldForm
              label="Location"
              name="location"
              type="select"
              register={register}
              rules={{ required: 'Location is required' }}
              errors={errors.location}
              option={[
                { value: '', label: 'Select a location' },
                { value: 'New York', label: 'New York' },
                { value: 'London', label: 'London' },
                { value: 'Paris', label: 'Paris' },
              ]}
            />
            <FieldForm
              label="Check In Date"
              name="checkIn"
              type="date"
              register={register}
              errors={errors.checkIn}
            />
            <FieldForm
              label="Check Out Date"
              name="checkOut"
              type="date"
              register={register}
              errors={errors.checkOut}
            />

            <FieldForm
              label="Guests"
              name="guests"
              type="number"
              register={register}
              registerOptions={{ valueAsNumber: true }}
              errors={errors.guests}
            />

            <button type="submit" className={styles.formBtn}>
              <FiSend className={styles.formIcon} />
            </button>
          </div>
        </AnimatedSection>
      </form>
    </>
  );
};

export default BookingForm;
