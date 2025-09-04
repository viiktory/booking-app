import { ContactForm, GoogleMap, ContactLinks } from '../../components';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <GoogleMap />
      <ContactForm />
    </section>
  );
};

export default Contact;
