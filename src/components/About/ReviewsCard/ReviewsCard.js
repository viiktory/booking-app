import { FaStar, FaRegStar } from 'react-icons/fa';
import styles from './ReviewsCard.module.scss';

const ReviewsCard = ({ item }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <img className={styles.userPhoto} src={item.avatar} alt={item.name} />
          <p className={styles.userName}>{item.name}</p>
        </div>
        <p className={styles.reviewText}>{item.text}</p>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) =>
            i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          )}
        </div>
      </div>

      <img className={styles.hotelImage} src={item.hotelImage} alt="hotel" />
    </div>
  );
};

export default ReviewsCard;
