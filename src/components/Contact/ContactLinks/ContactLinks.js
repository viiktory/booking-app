import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactItem } from '../../../components';
import styles from './ContactLinks.module.scss';

const ContactLinks = () => {
  return (
    <section className={styles.contactLinkSection}>
      <address className={styles.contactLinkContent}>
        <ContactItem
          icon={<FaEnvelope className={styles.contactIcon} />}
          to="mailto:info@startover.com"
          label="Email"
          placeholder="info@startover.com"
          className={styles.contactItem}
        />
        <ContactItem
          icon={<FaPhone className={styles.contactIcon} />}
          to="tel:+1234567890"
          label="Phone"
          placeholder="+1234567890"
          className={styles.contactItem}
        />

        <ContactItem
          icon={<FaMapMarkerAlt className={styles.contactIcon} />}
          to="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
          label="Location"
          placeholder="123 Main Street, New York, USA"
          className={styles.contactItem}
        />
      </address>
    </section>
  );
};

export default ContactLinks;
