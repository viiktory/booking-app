import stairs from '../../../assets/images/1.jpg';
import hotels from '../../../assets/images/2.jpg';
import rest from '../../../assets/images/3.jpg';
import { Button, Field } from '../../../components';
import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.aboutIntroContainer}>
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
          <Button text="read more" className="homeBtn" />
        </div>

        <div className={styles.aboutIntroImages}>
          <div className={styles.imagesRow}>
            <img className={styles.aboutIntroImage} src={stairs} alt="stairs" />
            <img className={styles.aboutIntroImage} src={hotels} alt="hotels" />
          </div>
          <div className={styles.imagesRow}>
            <img className={styles.aboutIntroImage} src={rest} alt="rest" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
