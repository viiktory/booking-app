import { ContactForm, GoogleMap, SubscribeNews } from '../../components';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <ContactForm />
      <GoogleMap />
      <SubscribeNews />
    </section>
  );
};

export default Contact;
