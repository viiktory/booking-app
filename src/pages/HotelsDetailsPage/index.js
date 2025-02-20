import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import styles from './HotelDetailsPages.module.scss';

const hotelImages = [
    require('../../assets/images/hotels/hotel1.jpeg'),
    require('../../assets/images/hotels/hotel2.jpeg'),
    require('../../assets/images/hotels/hotel3.jpeg'),
    require('../../assets/images/hotels/hotel4.jpeg'),
];

export default function HotelsDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const numericId = Number(id); // Convert ID to a number
        api.get(`/hotels/${numericId}`)
            .then((response) => {
                if (response.data) {
                    setHotel(response.data);
                    setLoading(false);
                } else {
                    setError('Hotel not found');
                    setLoading(false);
                }
            })
            .catch(() => {
                setError('Hotel not found');
                setLoading(false);
            });
    }, [id]);

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

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <div className={styles.hotelDetailsContainer}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h1 className={styles.hotelName}>{hotel.name}</h1>
            <img
                src={getHotelImage(hotel.image)}
                alt={hotel.name}
                className={styles.hotelImage}
            />
            <div className={styles.hotelInfo}>
                <p>
                    <strong>Address:</strong> {hotel.address}, {hotel.city}
                </p>
                <p>
                    <strong>Rating:</strong> {hotel.hotel_rating} ⭐
                </p>
                {hotel.phone_number && (
                    <p>
                        <strong>Phone:</strong> {hotel.phone_number}
                    </p>
                )}
                {hotel.website ? (
                    <p>
                        <strong>Website:</strong>{' '}
                        <a
                            href={hotel.website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit
                        </a>
                    </p>
                ) : (
                    <p>
                        <strong>Website:</strong> Not available
                    </p>
                )}
            </div>
        </div>
    );
}
