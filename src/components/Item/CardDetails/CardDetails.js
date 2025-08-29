import { FaHeart, FaRegEye } from 'react-icons/fa';
import styles from './CardDetails.module.scss';

const CardDetails = ({
  image,
  alt,
  title,
  description,
  date,
  category,
  author,
  readTime,
  views,
  likes,
  name,
  stars,
  hotelRating,
  address,
  city,
  country,
  phone,
  price,
  amenities = [],
  actionButton,
}) => {
  return (
    <section className={styles.details}>
      {image && (
        <div className={styles.imageBox}>
          <img src={image} alt={alt || title} className={styles.image} />
        </div>
      )}

      <div className={styles.content}>
        {category && <p className={styles.category}>{category}</p>}

        {(title || name) && (
          <>
            {title && <h2 className={styles.title}>{title}</h2>}
            {name && <h2 className={styles.title}>{name}</h2>}
          </>
        )}

        {(stars || hotelRating) && (
          <p className={styles.rating}>
            {stars && `${stars} ★`} {hotelRating && `(${hotelRating})`}
          </p>
        )}

        {description && <p className={styles.description}>{description}</p>}

        {amenities.length > 0 && (
          <ul className={styles.amenities}>
            {amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        {(date || category || author || readTime) && (
          <div className={styles.meta}>
            {date && <time>{date}</time>}
            {author && <span>By {author}</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}

        {(address || city || country) && (
          <address className={styles.address}>
            {address} {city} {country}
          </address>
        )}

        {phone && <p className={styles.phone}>{phone}</p>}

        {price && <p className={styles.price}>Price per night: ${price}</p>}

        {(views || likes) && (
          <div className={styles.footer}>
            {views && (
              <span>
                <FaRegEye /> {views}
              </span>
            )}
            {likes && (
              <span>
                <FaHeart /> {likes}
              </span>
            )}
          </div>
        )}

        {actionButton && <div className={styles.actionButton}>{actionButton}</div>}
      </div>
    </section>
  );
};

export default CardDetails;
