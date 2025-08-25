import ErrorImg from '../../assets/images/404_error.png';
import { Button } from '../../components';
import { PATHS } from '../../paths';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <main className={styles.errorBox}>
      <section className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.errorTitle}>Oops! Page not found</h1>
          <p className={styles.errorDescription}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <ul className={styles.errorList}>
            <li>Maybe double-check the URL?</li>
            <li>Or head back to the homepage</li>
          </ul>
          <Button text="Take me Back" to={PATHS.HOME} className="homeBtn" />
        </div>

        <div className={styles.errorImage}>
          <img src={ErrorImg} alt="404 error" className={styles.errorImg} />
        </div>
      </section>
    </main>
  );
};

export default Error;
