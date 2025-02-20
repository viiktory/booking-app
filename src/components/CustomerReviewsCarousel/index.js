import React, { useRef, useEffect, useState } from 'react';
import { Carousel, Button, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import styles from './CustomerReviewsCarousel.module.scss';

const getImage = (fileName) => {
    try {
        return require(`../../assets/images/customers/${fileName}`);
    } catch {
        return '';
    }
};

const getHotelImage = (fileName) => {
    try {
        return require(`../../assets/images/hotels/${fileName}`);
    } catch {
        return '';
    }
};

export default function CustomerReviewsCarousel() {
    const carouselRef = useRef(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.get('/reviews')
            .then((response) =>
                setReviews(
                    response.data.map((review) => ({
                        ...review,
                        photo: getImage(review.photo),
                        hotelPhoto: getHotelImage(review.image),
                    }))
                )
            )
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>What Our Customers Say</h2>
            <div className={styles.carouselContainer}>
                <Button
                    className={styles.prevButton}
                    icon={<LeftOutlined />}
                    onClick={() => carouselRef.current.prev()}
                />
                <Carousel
                    ref={carouselRef}
                    dots={false}
                    autoplay
                    infinite
                    adaptiveHeight
                    className={styles.carousel}
                >
                    {reviews.length ? (
                        reviews.map((review) => (
                            <div
                                key={review.name}
                                className={styles.reviewSlide}
                            >
                                {/* Left Side: Review */}
                                <div className={styles.reviewContent}>
                                    <div className={styles.reviewInfo}>
                                        <img
                                            src={review.photo}
                                            alt={review.name}
                                            className={styles.photo}
                                        />
                                        <h4 className={styles.reviewAuthor}>
                                            {review.name}
                                        </h4>
                                        <Rate
                                            value={review.rating}
                                            disabled
                                            className={styles.rating}
                                        />
                                    </div>
                                    <p className={styles.reviewText}>
                                        {review.text}
                                    </p>
                                </div>

                                {/* Right Side: Hotel Image */}
                                <div className={styles.hotelImageContainer}>
                                    {review.hotelPhoto ? (
                                        <img
                                            src={review.hotelPhoto}
                                            alt="Hotel"
                                            className={styles.hotelPhoto}
                                        />
                                    ) : (
                                        <p>Hotel image not available</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )}
                </Carousel>
                <Button
                    className={styles.nextButton}
                    icon={<RightOutlined />}
                    onClick={() => carouselRef.current.next()}
                />
            </div>
        </section>
    );
}
