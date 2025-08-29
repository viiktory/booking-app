import { Link } from 'react-router-dom';
import styles from './CartItem.module.scss';

const CartItem = ({ to, image, alt, header, subheader, meta, footer, className }) => {
  return (
    <Link to={to} className={`${styles.card} ${className || ''}`}>
      {image && <img src={image} alt={alt} className={styles.card__image} />}
      <div className={`${styles.cardContent} ${className || ''}`}>
        {header && <h2 className={styles.card__header}>{header}</h2>}
        {subheader && <p className={styles.card__subheader}>{subheader}</p>}
        {meta && <div className={styles.card__meta}>{meta}</div>}
        {footer && <div className={styles.card__footer}>{footer}</div>}
      </div>
    </Link>
  );
};

export default CartItem;
