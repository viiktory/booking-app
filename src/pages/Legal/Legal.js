import { useParams } from 'react-router-dom';
import bgLegal from '../../assets/images/bg-legal.jpg';
import { legalContent } from '../../data/legalContent';
import styles from './Legal.module.scss';

const Legal = () => {
  const { page } = useParams();

  const { title, text } = legalContent[page] || {};

  if (!title) {
    return <h1 className={styles.notFound}>Page not found</h1>;
  }

  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.legalTitle}>{title}</h1>
      <p className={styles.legalText}>{text}</p>
      <img src={bgLegal} alt="decor" className={styles.animatedImg} />
    </div>
  );
};

export default Legal;
