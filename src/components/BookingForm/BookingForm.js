import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../../features/formValidation';
import { FiSend } from 'react-icons/fi';
import styles from './BookingForm.module.scss';
import { FieldForm } from '../../components';

const BookingForm = () => {
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
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} autoComplete="off">
        <FieldForm
          label="Location"
          name="location"
          type="select"
          register={register}
          option={[
            { value: '', label: 'Select a location' },
            { value: 'New York', label: 'New York' },
            { value: 'Boston', label: 'Boston' },
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
          errors={errors.guests}
        />

        <button type="submit" className={styles.formBtn}>
          <FiSend className={styles.formIcon} />
        </button>
      </form>
    </>
  );
};

export default BookingForm;
