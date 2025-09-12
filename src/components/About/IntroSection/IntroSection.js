import resortHouse from '../../../assets/images/resortHouse.jpg';
import apartment from '../../../assets/images/apartment.jpg';
import { FaArrowRight } from 'react-icons/fa6';
import { PATHS } from '../../../paths';
import restaurant from '../../../assets/images/restaurant.jpg';
import { Button, Field, AnimatedSection } from '../../../components';
import styles from './Intro.module.scss';

const IntroSection = () => {
  return (
    <section className="container">
      <AnimatedSection viewport={{ once: true, amount: 0.3 }}>
        <div className={styles.aboutIntroContent}>
          <div className={styles.aboutIntroText}>
            <Field
              label="About Us"
              title="How It All Began"
              description="Start Over was founded by a group of travel enthusiasts who recognized the need for a
            hassle-free hotel booking experience. Frustrated with complicated platforms, we created
            a solution that combines user-friendly design with powerful features. Since our
            launch,we've helped thousands of travelers find their perfect stay."
              className="introTextWrapper"
            />
            <Button
              text="read more"
              className="homeBtn"
              icon={FaArrowRight}
              to={PATHS.ERROR}
            />
          </div>

          <div className={styles.aboutIntroImages}>
            <div className={styles.imagesRow}>
              <img
                className={styles.aboutIntroImage}
                src={resortHouse}
                alt="resort house"
              />
              <img
                className={styles.aboutIntroImage}
                src={apartment}
                alt="apartment near the sea"
              />
            </div>
            <div className={styles.imagesRow}>
              <img
                className={styles.aboutIntroImage}
                src={restaurant}
                alt="restaurant"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default IntroSection;
