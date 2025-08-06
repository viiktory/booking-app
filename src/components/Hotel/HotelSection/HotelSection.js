import { useQuery } from '@tanstack/react-query';
import { fetchHotels } from '../../../api/fetchHotels';
import { Button, Field, HotelCard } from '../../../components';
import styles from './HotelSection.module.scss';
import { useState } from 'react';

const HotelSection = () => {
  const {
    data: hotels = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });

  const [isVisible, setVisible] = useState(6);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 6);
  };

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.hotelSectionContainer}>
      <div className={styles.hotelSectionContent}>
        <Field label="Hotels" title="Choose the best now" className="introTextWrapper" />
        <div className={styles.hotelSectionText}>
          {hotels.slice(0, isVisible).map((hotel) => (
            <HotelCard key={hotel.id} item={hotel} />
          ))}
        </div>
        {isVisible < hotels.length && (
          <Button text="load more" onClick={handleLoadMore} className="homeBtn" />
        )}
      </div>
    </section>
  );
};

export default HotelSection;
