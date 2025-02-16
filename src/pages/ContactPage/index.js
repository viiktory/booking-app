import React from 'react';
import ContactInfo from '../../components/ContactInfo';
import GoogleMap from '../../components/GoogleMap';
import ContactForm from '../../components/ContactForm';
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
