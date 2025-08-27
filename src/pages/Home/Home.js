import { FaArrowRight } from 'react-icons/fa6';
import { PATHS } from '../../paths';
import { AboutUs } from '../../pages';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <section className={styles.homeBg}>
        <div className={styles.overlay}></div>
        <div className={styles.homeContainer}>
          <div className={styles.homeContent}>
            <h1 className={styles.homeTitle}>Start Over – Your Ideal Hotel Booking Experience</h1>
            <p className={styles.homeDescription}>
              Book your next stay easily and stress-free. Find the perfect hotel in just a few
              clicks. Your journey with comfort and ease today!
            </p>
            <a href={PATHS.ABOUT} className="homeBtn">
              Find
              <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>
      </section>
      <AboutUs />
    </>
  );
};

export default Home;
