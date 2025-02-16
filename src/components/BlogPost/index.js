import React from 'react';
import Index from '../BlogCard';
import hotelImage from '../../assets/images/blog/hotels.jpg';
import newYorkImage from '../../assets/images/blog/new-york-city.jpg';
import packingTips from '../../assets/images/blog/packing.jpg';
import styles from './BlogPost.module.scss';

const blogPosts = [
    {
        image: hotelImage,
        alt: 'Hotel room with modern amenities',
        title: 'How to Choose the Best hotels for Your Trip',
        description:
            'Learn about key factors to consider when booking hotels...',
        date: 'January 25, 2025',
    },
    {
        image: newYorkImage,
        alt: 'New York City skyline with iconic buildings',
        title: 'Top 5 Travel Destinations in 2025',
        description: 'Discover the top travel destinations for 2025...',
        date: 'January 25, 2025',
    },
    {
        image: packingTips,
        alt: 'Top things for a Vacation',
        title: 'Packing Tips for a Perfect Vacation',
        description: 'Essential packing tips to ensure you have everything...',
        date: 'January 25, 2025',
    },
];

export default function BlogPost() {
    return (
        <div className={styles.cardsWrapper}>
            {blogPosts.map((post, index) => (
                <Index key={index} {...post} />
            ))}
        </div>
    );
}
