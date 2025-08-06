import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { NavItem } from '../../../components';
import styles from './ContactLinks.module.scss';

const ContactLinks = () => {
  return (
    <section className={styles.contactLinkSection}>
      <address className={styles.contactLinkContent}>
        <NavItem
          icon={<FaEnvelope className={styles.contactIcon} />}
          to="mailto:info@startover.com"
          target="_blank"
          label="Email"
          placeholder="info@startover.com"
          rel="noopener noreferrer"
          className={styles.contactItem}
        />
        <NavItem
          icon={<FaPhone className={styles.contactIcon} />}
          to="tel:+1234567890"
          target="_blank"
          label="Phone"
          placeholder="+1234567890"
          rel="noopener noreferrer"
          className={styles.contactItem}
        />

        <NavItem
          icon={<FaMapMarkerAlt className={styles.contactIcon} />}
          to="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
          target="_blank"
          label="Location"
          placeholder="123 Main Street, New York, USA"
          rel="noopener noreferrer"
          className={styles.contactItem}
        />
      </address>
    </section>
  );
};

export default ContactLinks;
