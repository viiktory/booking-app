import React, { useRef, useEffect, useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import styles from './CustomerReviewsCarousel.module.scss';

export default function CustomerReviewsCarousel() {
    const carouselRef = useRef(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.get('/reviews')
            .then((response) => {
                setReviews(
                    response.data.map((review) => ({
                        ...review,
                        photo: `${window.location.origin}${review.photo}`,
                        hotelPhoto: `${window.location.origin}${review.image}`,
                    }))
                );
            })
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>What Our Customers Say</h2>
            <div className={styles.carouselContainer}>
                <Button
                    className={styles.prevButton}
                    icon={<LeftOutlined />}
                    onClick={() => carouselRef.current?.prev()}
                />
                <Carousel
                    ref={carouselRef}
                    className={styles.carousel}
                    dots={{ className: styles.dots }}
                >
                    {reviews.length ? (
                        reviews.map((review) => (
                            <div
                                key={review.name}
                                className={styles.reviewSlide}
                            >
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
                                    </div>
                                    <p className={styles.reviewText}>
                                        {review.text}
                                    </p>
                                </div>
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
                    onClick={() => carouselRef.current?.next()}
                />
            </div>
        </section>
    );
}
