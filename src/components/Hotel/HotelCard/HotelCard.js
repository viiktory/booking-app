import { PATHS } from '../../../paths';
import styles from './HotelCard.module.scss';
import { Link } from 'react-router-dom';

const HotelCard = ({ item }) => {
  return (
    <Link
      to={`${PATHS.HOTELS.details.replace(':id', item.id)}`}
      className={styles.hotelCardSection}
    >
      <img src={item.image} alt={`Image of ${item.name}`} className={styles.hotelCardImage} />
      <div className={styles.hotelCardContent}>
        <header>
          <h3 className={styles.hotelCardTitle}>{item.name}</h3>
          <p className={styles.hotelCardText}>{item.hotel_rating} ★</p>
        </header>
        <address className={styles.hotelCardText}>
          {item.address}, {item.city}, {item.country}
        </address>
        <p className={styles.hotelCardText}> {item.phone_number}</p>
      </div>
    </Link>
  );
};

export default HotelCard;
