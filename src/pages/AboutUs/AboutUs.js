import React from 'react';
import { Intro, AdvantageSection, ReviewsSection } from '../../components';
import BookingForm from '../../components/BookingForm/BookingForm';
import styles from './AboutPage.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about} id="about">
      <BookingForm />
      <Intro />
      <AdvantageSection />
      <ReviewsSection />
    </section>
  );
};

export default AboutUs;
