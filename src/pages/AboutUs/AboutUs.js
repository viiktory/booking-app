import React from 'react';
import AboutIntro from '../../components/About/AboutIntro';
import AboutFeatures from '../../components/About/AboutFeatures';
import CustomerReviewsCarousel from '../../components/CustomerReviewsCarousel';
import styles from './AboutPage.module.scss';
import BookingForm from "../../components/BookingForm/BookingForm";

const AboutUs = () => {
  return (
    <section className={styles.about} id="about">
      <BookingForm/>
      <AboutIntro />
      <AboutFeatures />
      <CustomerReviewsCarousel />
    </section>
  );
};

export default AboutUs;
