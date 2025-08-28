import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchHotels } from '../../../api/fetchHotels';
import { Button } from '../../../components';
import { PATHS } from '../../../paths';
import styles from './HotelDetails.module.scss';

const HotelDetails = () => {
  const { id } = useParams();

  const {
    data: hotels = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return 'Error!';

  const hotel = hotels.find((item) => item.id === Number(id));
  if (!hotel) return <p>Hotel not found</p>;

  return (
    <section className={styles.hotelDetails}>
      <div className={styles.hotelBox}>
        <Button text="Back" to={PATHS.HOTELS.hotels} className={styles.hotelBtn} />

        <div className={styles.hotelContainer}>
          <div className={styles.hotelImages}>
            <img src={hotel.image} alt={`Image of ${hotel.name}`} className={styles.hotelImage} />
          </div>

          <div className={styles.hotelContent}>
            <h2 className={styles.hotelTitle}>{hotel.name}</h2>
            <p className={styles.hotelRating}>
              {hotel.stars} ★ ({hotel.hotel_rating})
            </p>
            <p className={styles.hotelAddress}>
              {hotel.address}, {hotel.city}, {hotel.country}
            </p>

            <p className={styles.hotelDescription}>{hotel.description}</p>
            <ul className={styles.hotelAmenities}>
              {hotel.amenities.map((amenity, i) => (
                <li key={i}>{amenity}</li>
              ))}
            </ul>

            <div className={styles.hotelBook}>
              <p className={styles.hotelPrice}>Price per night: ${hotel.price_per_night}</p>
              <Button text="Book now" className="homeBtn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
