import { Button, AnimatedSection } from '../../index';
import styles from './GoogleMap.module.scss';

const GoogleMap = () => {
  return (
    <AnimatedSection viewport={{ once: true }}>
      <div className={styles.mapContainer}>
        <h3 className={styles.mapTitle}>
          We are always happy for our customers!
        </h3>
        <p className={styles.mapDescription}>
          If you want to find our office and visit in person, click on the
          button below to open the map and find out the exact location
        </p>
        <Button
          text="Find out where our office is"
          className={styles.mapBtn}
          onClick={() =>
            window.open(
              'https://www.google.com/maps/place/123+Main+Street,+New+York,+USA',
              '_blank'
            )
          }
        />
      </div>
    </AnimatedSection>
  );
};

export default GoogleMap;
