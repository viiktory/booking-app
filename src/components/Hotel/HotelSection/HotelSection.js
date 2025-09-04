import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { getHotels } from '../../../api/getHotels';
import { Field, HotelCard } from '../../../components';
import styles from './HotelSection.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

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

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.hotelSectionContainer}>
      <div className="container">
        <Field label="Hotels" title="Choose the best now" className="introTextWrapper" />
        <div className={styles.hotelSectionText}>
          <Swiper
            modules={[Pagination, Navigation, Grid]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={3}
            grid={{ rows: 2, fill: 'row' }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1, grid: { rows: 2 } },
              768: { slidesPerView: 2, slidesPerGroup: 2, grid: { rows: 2 } },
              1024: { slidesPerView: 3, slidesPerGroup: 3, grid: { rows: 2 } },
            }}
          >
            {filteredHotels.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <HotelCard item={hotel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
