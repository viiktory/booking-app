import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { subscribeSchema } from '../../features/contactFormValidation';
import SubscribeImg from '../../assets/images/subscribe_news.jpg';
import { FieldForm, Button } from '../../components';
import styles from './SubscribeNews.module.scss';

const SubscribeNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = () => {
    reset();
    toast.success('Your request has been sent!');
  };

  return (
    <section className={styles.subscribeSection}>
      <img className={styles.subscribeImage} src={SubscribeImg} alt="subscribe_news" />
      <form className={styles.subscribeContent} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.subscribeTitle}>Subscribe to our Newsletter!</h2>
        <p className={styles.subscribeDescription}>
          Be the first to receive exclusive offers and latest news
        </p>
        <FieldForm
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          errors={errors.email}
        />
        <Button text="Subscribe" type="submit" className="homeBtn" />
      </form>
    </section>
  );
};

export default SubscribeNews;
