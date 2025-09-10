import { FaCog } from 'react-icons/fa';
import ErrorImg from '../../assets/images/404_error.png';
import { PATHS } from '../../paths';
import { Button } from '../../components';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <main className={styles.errorBox}>
      <section className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <FaCog className={styles.rotatingIcon} />
          <h1 className={styles.errorTitle}>Oops! Page not found</h1>
          <p className={styles.errorDescription}>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <ul className={styles.errorList}>
            <li>Maybe double-check the URL?</li>
            <li>Or head back to the homepage</li>
          </ul>
          <Button text="Take me Back" to={PATHS.HOME} className="homeBtn" />
        </div>

        <img src={ErrorImg} alt="404 error" className={styles.errorImg} />
      </section>
    </main>
  );
};

export default Error;
