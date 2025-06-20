import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { fetchHotels } from '../../store/slices/hotelsSlice';
import BookingForm from '../../components/BookingForm';
import styles from './HotelsPage.module.scss';

const hotelImages = [
  '/assets/images/hotels/hotel1.jpeg',
  '/assets/images/hotels/hotel2.jpeg',
  '/assets/images/hotels/hotel3.jpeg',
  '/assets/images/hotels/hotel4.jpeg',
];

export default function HotelsPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { hotels, status, error } = useSelector((state) => state.hotels);

  const hotelsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHotels());
    }
  }, [status, dispatch]);

  const filteredHotels = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get('location');

    if (city) {
      return hotels.filter((hotel) => hotel.city?.toLowerCase() === city?.toLowerCase());
    }
    return hotels;
  }, [hotels, location.search]);

  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
  const startIndex = (currentPage - 1) * hotelsPerPage;

  const currentHotels = useMemo(() => {
    return filteredHotels.slice(startIndex, startIndex + hotelsPerPage);
  }, [filteredHotels, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginationButtons = useMemo(() => {
    return [...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        style={{
          fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
        }}
      >
        {index + 1}
      </button>
    ));
  }, [totalPages, currentPage]);

  const getHotelImage = (image) => {
    if (image) {
      return `/assets/images/hotels/${image}`;
    }
    return hotelImages[Math.floor(Math.random() * hotelImages.length)];
  };

  return (
    <div className={styles.hotelsContainer}>
      <h1 className={styles.hotelsTitle}>Hotels</h1>

      {status === 'loading' && <p>Loading hotels...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <div className={styles.hotelsList}>
        {currentHotels.length > 0
          ? currentHotels.map((hotel) => (
              <div key={hotel.id} className={styles.hotelCard}>
                <Link to={`/hotels/${hotel.id}`} className={styles.hotelLink}>
                  <img src={getHotelImage(hotel.image)} alt={hotel.name} />
                  <h3>{hotel.name}</h3>
                  <p>
                    {hotel.address}, {hotel.city}
                  </p>
                </Link>
              </div>
            ))
          : status === 'succeeded' && <p>No hotels found.</p>}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {paginationButtons}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      <BookingForm />
    </div>
  );
}
