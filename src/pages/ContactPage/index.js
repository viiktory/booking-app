import React from 'react';
import ContactInfo from '../../components/Contact/ContactInfo';
import GoogleMap from '../../components/GoogleMap';
import ContactForm from '../../components/Contact/ContactForm';
import styles from './ContactPage.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.title}>Contact Us</h1>
      <section className={styles.contactSection}>
        <ContactInfo />
        <GoogleMap />
        <ContactForm />
      </section>
    </div>
  );
}
