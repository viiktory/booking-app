import React from 'react';
import { FaRegSmile, FaHotel, FaDollarSign, FaStar } from 'react-icons/fa';
import styles from './AboutFeatures.module.scss';

const features = [
    {
        id: 1,
        icon: <FaRegSmile className={styles.icon} />,
        title: 'Easy-to-use Interface',
        description:
            'Fast and efficient bookings with a simple and user-friendly design.',
    },
    {
        id: 2,
        icon: <FaHotel className={styles.icon} />,
        title: 'Wide Range of hotels',
        description:
            ' Access to hotels of all kinds, from luxury stays to budget-friendly options.',
    },
    {
        id: 3,
        icon: <FaDollarSign className={styles.icon} />,
        title: 'Transparent Pricing',
        description: 'No hidden fees — what you see is what you pay for.',
    },
    {
        id: 4,
        icon: <FaStar className={styles.icon} />,
        title: 'Personalized Recommendations',
        description:
            'Tailored suggestions based on your preferences and past choices.',
    },
];

export default function AboutFeatures() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Why Choose Us?</h2>
            <div className={styles.cardsWrapper}>
                {features.map((feature) => (
                    <div className={styles.card} key={feature.id}>
                        {feature.icon}
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDescription}>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
