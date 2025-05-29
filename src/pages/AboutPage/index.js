import React from 'react';
import AboutIntro from '../../components/About/AboutIntro';
import AboutFeatures from '../../components/About/AboutFeatures';
import CustomerReviewsCarousel from '../../components/CustomerReviewsCarousel';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <AboutIntro />
      <AboutFeatures />
      <CustomerReviewsCarousel />
    </div>
  );
}
