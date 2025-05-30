import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import styles from './ContactInfo.module.scss';

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <h2 className={styles.title}>We&apos;d love to hear from you!</h2>
          <address className={styles.contactInfo}>
            <p>
              <FaPhone className={styles.icon} />
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                {' '}
                +1 (234) 567-890
              </a>
            </p>
            <p>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:info@startover.com" target="_blank" rel="noopener noreferrer">
                info@startover.com
              </a>
            </p>
            <p>
              <FaMapMarkerAlt className={styles.icon} />
              <a
                href="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                123 Main Street, New York, USA
              </a>
            </p>
          </address>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
