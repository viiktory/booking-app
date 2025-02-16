import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../../components/BookingForm';
import api from '../../utils/api';
import styles from './HotelsPage.module.scss';

const hotelImages = [
    require('../../assets/images/hotels/hotel1.jpeg'),
    require('../../assets/images/hotels/hotel2.jpeg'),
    require('../../assets/images/hotels/hotel3.jpeg'),
    require('../../assets/images/hotels/hotel4.jpeg'),
];

export default function HotelsPage() {
    const location = useLocation();
    const [allHotels, setAllHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const hotelsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        api.get('/hotels')
            .then((response) => {
                setAllHotels(response.data);
                setFilteredHotels(response.data);
            })
            .catch((error) => console.error('Error fetching hotels:', error));
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const city = params.get('location');

        if (city) {
            setFilteredHotels(
                allHotels.filter(
                    (hotel) => hotel.city?.toLowerCase() === city?.toLowerCase()
                )
            );
        } else {
            setFilteredHotels(allHotels);
        }
        setCurrentPage(1);
    }, [location.search, allHotels]);

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
            try {
                return require(`../../assets/images/hotels/${image}`);
            } catch {
                return hotelImages[
                    Math.floor(Math.random() * hotelImages.length)
                ];
            }
        }
        return hotelImages[Math.floor(Math.random() * hotelImages.length)];
    };

    return (
        <div className={styles.hotelsContainer}>
            <h1 className={styles.hotelsTitle}>Hotels</h1>
            <div className={styles.hotelsList}>
                {currentHotels.length > 0 ? (
                    currentHotels.map((hotel) => (
                        <div key={hotel.id} className={styles.hotelCard}>
                            <img
                                src={getHotelImage(hotel.image)}
                                alt={hotel.name}
                            />
                            <h3>{hotel.name}</h3>
                            <p>
                                {hotel.address}, {hotel.city}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No hotels found.</p>
                )}
            </div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
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
