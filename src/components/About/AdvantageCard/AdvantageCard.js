import PropTypes from 'prop-types';
import { FaDollarSign, FaHotel, FaRegSmile, FaStar } from 'react-icons/fa';
import styles from './AdvantageCard.module.scss';

const iconMap = {
  FaRegSmile: FaRegSmile,
  FaHotel: FaHotel,
  FaDollarSign: FaDollarSign,
  FaStar: FaStar
};

const AdvantageCard = ({ item }) => {
  const Icon = iconMap[item.icon];

  return (
    <div className={styles.advantageCardContainer}>
      <div className={styles.advantageCardHeader}>
        {Icon && <Icon className={styles.advantageCardIcon} />}
        <h3 className={styles.advantageCarTitle}>{item.title}</h3>
      </div>
      <p className={styles.advantageCarDescription}>{item.description}</p>
    </div>
  );
};

AdvantageCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default AdvantageCard;
