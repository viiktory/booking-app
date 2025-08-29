// import {useState} from "react";
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getHotels } from '../../../api/getHotels';
import { Field, HotelCard } from '../../../components';
import styles from './HotelSection.module.scss';

const HotelSection = () => {
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

  // const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.hotelSectionContainer}>
      <div className="container">
        <Field label="Hotels" title="Choose the best now" className="introTextWrapper" />
        <div className={styles.hotelSectionText}>
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} item={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
