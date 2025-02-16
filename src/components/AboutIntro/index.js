import React from 'react';
import styles from './AboutIntro.module.scss';
import team from '../../assets/images/about/team.jpg';

export default function AboutIntro() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>How It All Began</h2>
                    <p className={styles.descriptionText}>
                        Start Over was founded by a group of travel enthusiasts
                        who recognized the need for a hassle-free hotel booking
                        experience. Frustrated with complicated platforms, we
                        created a solution that combines user-friendly design
                        with powerful features. Since our launch,we&apos;ve
                        helped thousands of travelers find their perfect stay.
                    </p>
                </div>
                <img
                    className={styles.image}
                    src={team}
                    alt="Our team working together"
                />
            </div>
        </section>
    );
}
