import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import styles from './BlogDetailsPage.module.scss';

export default function BlogDetailsPage() {
    const { title } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('/posts')
            .then((response) => {
                const formattedTitle = decodeURIComponent(title)
                    .replace(/-/g, ' ')
                    .toLowerCase()
                    .trim();
                const foundPost = response.data.find(
                    (post) => post.title.toLowerCase().trim() === formattedTitle
                );
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Post not found');
                }
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching post');
                setLoading(false);
            });
    }, [title]);

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <div className={styles.blogDetailsContainer}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h1 className={styles.blogTitle}>{post.title}</h1>
            <img
                src={`/assets/images/blog/${post.image}.jpg`}
                alt={post.alt}
                className={styles.blogImage}
            />
            <p className={styles.blogDate}>Posted on: {post.date}</p>
            <p className={styles.blogDescription}>{post.description}</p>
        </div>
    );
}
