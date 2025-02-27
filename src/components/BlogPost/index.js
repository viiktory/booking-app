import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard';
import api from '../../utils/api';
import styles from './BlogPost.module.scss';

export default function BlogPost() {
    const [posts, setPosts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        api.get('/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.cardsWrapper}>
                {posts.slice(0, visibleCount).map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
            <button className={styles.loadMoreBtn} onClick={loadMore}>
                Load More ⮟
            </button>
        </div>
    );
}
