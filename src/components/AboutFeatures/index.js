import React, { useRef, useState, useEffect } from 'react';
import { FaRegSmile, FaHotel, FaDollarSign, FaStar } from 'react-icons/fa';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './AboutFeatures.module.scss';

const features = [
    {
        id: 1,
        icon: <FaRegSmile className={styles.icon} />,
        title: 'Easy-to-use Interface',
        description:
            'Fast and efficient bookings with a simple and user-friendly design.',
    },
    {
        id: 2,
        icon: <FaHotel className={styles.icon} />,
        title: 'Wide Range of Hotels',
        description:
            'Access to hotels of all kinds, from luxury stays to budget-friendly options.',
    },
    {
        id: 3,
        icon: <FaDollarSign className={styles.icon} />,
        title: 'Transparent Pricing',
        description: 'No hidden fees — what you see is what you pay for.',
    },
    {
        id: 4,
        icon: <FaStar className={styles.icon} />,
        title: 'Personalized Recommendations',
        description:
            'Tailored suggestions based on your preferences and past choices.',
    },
];

export default function AboutFeatures() {
    const carouselRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Why Choose Us?</h2>
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
                    slidesToShow={slidesToShow}
                    slidesToScroll={1}
                    className={styles.carousel}
                >
                    {features.map((feature) => (
                        <div key={feature.id} className={styles.cardWrapper}>
                            <div className={styles.card}>
                                {feature.icon}
                                <h3 className={styles.cardTitle}>
                                    {feature.title}
                                </h3>
                                <p className={styles.cardDescription}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
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
