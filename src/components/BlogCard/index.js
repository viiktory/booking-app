import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.scss';

export default function BlogCard({ image, alt, title, description, date }) {
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    return (
        <article className={styles.card}>
            <img
                className={styles.images}
                src={`/assets/images/blog/${image}.jpg`}
                alt={alt}
            />
            <div className={styles.textContainer}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <p className={styles.date}>Posted on: {date}</p>
                <Link to={`/blog/${slug}`} className={styles.btn}>
                    Read More
                </Link>
            </div>
        </article>
    );
}

BlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
