import React, { useRef, useEffect, useState } from 'react';
import { Carousel, Button } from 'antd';
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
                                <img
                                    src={review.photo}
                                    alt={review.name}
                                    className={styles.photo}
                                />
                                <p className={styles.reviewText}>
                                    {review.text}
                                </p>
                                <h4 className={styles.reviewAuthor}>
                                    {review.name}
                                </h4>
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
