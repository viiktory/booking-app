import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getHotels } from '../../../api/getHotels';
import { Field, HotelCard } from '../../../components';
import styles from './HotelSection.module.scss';

const HotelSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: hotels = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hotels'],
    queryFn: getHotels,
  });

  const locationSearch = new URLSearchParams(useLocation().search);
  const selectedLocation = locationSearch.get('location');

  const filteredHotels = selectedLocation
    ? hotels.filter((hotel) => hotel.city === selectedLocation)
    : hotels;

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const hotelPerPage = 6;
  const totalPages = Math.ceil(filteredHotels.length / hotelPerPage);

  const startIndex = (currentPage - 1) * hotelPerPage;
  const endIndex = startIndex + hotelPerPage;
  const currentHotels = filteredHotels.slice(startIndex, endIndex);

  return (
    <section className={styles.hotelSectionContainer}>
      <div className="container">
        <Field label="Hotels" title="Choose the best now" className="introTextWrapper" />
        <div className={styles.hotelSectionText}>
          {currentHotels.map((hotel) => (
            <HotelCard key={hotel.id} item={hotel} />
          ))}
        </div>
        <div className={styles.paginationDots}>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentPage === index + 1 ? styles.active : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
