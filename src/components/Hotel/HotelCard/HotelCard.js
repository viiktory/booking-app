import styles from './HotelCard.module.scss';

const HotelCard = ({ item }) => {
  return (
    <div className={styles.hotelCardSection}>
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
    </div>
  );
};

export default HotelCard;
