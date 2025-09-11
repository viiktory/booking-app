import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '../../../features/contactFormValidation';
import { FieldForm, Field, Button, AnimatedSection } from '../../../components';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = () => {
    reset();
    toast.success('Your request has been sent!');
  };

  return (
    <section className={styles.contactContainer}>
      <Field
        label="Contact"
        title="Contact us to get free support"
        className="introTextWrapper container"
      />
      <AnimatedSection viewport={{ once: true }}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
          <h3 className={styles.contactTitle}>
            Need help or advice? Leave a message and we will respond as soon as
            possible.
          </h3>

          <div className={styles.contactMessage}>
            <FieldForm
              label="Your message"
              name="message"
              type="textarea"
              register={register}
              errors={errors.message}
            />
          </div>

          <div className={styles.contactInput}>
            <FieldForm
              vertical
              label="Name"
              name="name"
              type="text"
              register={register}
              errors={errors.name}
            />
            <FieldForm
              vertical
              label="Email"
              name="email"
              type="email"
              register={register}
              errors={errors.email}
            />
            <div className={styles.contactInput}>
              <Button text="Send" type="submit" className="homeBtn" />
            </div>
          </div>
        </form>
      </AnimatedSection>
    </section>
  );
};

export default ContactForm;
