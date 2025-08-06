import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../../../features/contactFormValidation';
import { FieldForm, Field, Button } from '../../../components';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactContainer}>
      <Field label="Contact" title="Contact us to get free support"
             className="introTextWrapper container"/>
      <div className={styles.contactContent}>

        <div className={styles.contactMessage}>
          <FieldForm
            label="Enter message"
            name="message"
            type="textarea"
            register={register}
            errors={errors.message}
          />
        </div>
        <div className={styles.contactInput}>
          <FieldForm
            label="Your name"
            name="name"
            type="text"
            register={register}
            errors={errors.name}
          />
          <FieldForm
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors.email}
          />
          <Button text="Send" className="homeBtn"/>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
