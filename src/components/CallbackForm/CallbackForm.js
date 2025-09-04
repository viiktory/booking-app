import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { contactForm } from '../../features/contactFormValidation';
import { FieldForm, Button } from '../../components';
import styles from './CallbackForm.module.scss';

const CallbackForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactForm),
  });

  const onSubmit = () => {
    reset();
    toast.success('Your request has been sent!');
    onClose();
  };

  return (
    <div className={styles.callbackFormWrapper}>
      <div className={styles.formContainer}>
        <Button icon={FiX} onClick={onClose} className={styles.formBtn} />
        <h2 className={styles.formTitle}>
          Please leave your phone number to clarify the reservation details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FieldForm
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            register={register}
            errors={errors.phone}
          />
          <Button text="Send" className="homeBtn" />
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
