import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactForm } from '../../features/contactFormValidation';
import { FieldForm, Button } from '../../components';
import styles from './CallbackForm.module.scss';

const CallbackForm = ({ onClose }) => {
  const [isSent, setSent] = useState(false);

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
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 2000);
  };

  return (
    <div className={styles.callbackFormWrapper}>
      {!isSent ? (
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
      ) : (
        <div className={styles.formContainer}>
          <h3 className={styles.sentMessage}>Your request has been sent!</h3>
        </div>
      )}
    </div>
  );
};

export default CallbackForm;
