import { FaDollarSign, FaHotel, FaRegSmile, FaStar } from 'react-icons/fa';
import styles from './AdvantageCard.module.scss';

const iconMap = {
  FaRegSmile: FaRegSmile,
  FaHotel: FaHotel,
  FaDollarSign: FaDollarSign,
  FaStar: FaStar,
};

const AdvantageCard = ({ item }) => {
  const Icon = iconMap[item.icon];
  return (
    <div className={styles.advantageCardContainer}>
      {Icon && <Icon className={styles.advantageCarIcon} />}
      <h3 className={styles.advantageCarTitle}>{item.title}</h3>
      <p className={styles.advantageCarDescription}>{item.description}</p>
    </div>
  );
};

export default AdvantageCard;
