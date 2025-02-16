import React from 'react';
import BookingForm from '../../components/BookingForm';
import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.home}>
                    <div className={styles.overlay}></div>
                    <div className={styles.homeContent}>
                        <h1 className={styles.homeTitle}>
                            Start Over – Your Ideal Hotel Booking Experience
                        </h1>
                        <p className={styles.homeText}>
                            Start Over makes booking your next stay effortless
                            and stress-free. Whether you’re traveling for
                            business or leisure, find the perfect hotel with
                            just a few clicks. Explore options, compare prices,
                            and secure your reservation all in one place. Start
                            your journey with comfort and ease today!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.formWrapper}>
                <BookingForm />
            </div>
        </div>
    );
}
