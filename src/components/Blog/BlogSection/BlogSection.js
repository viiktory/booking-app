import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBlogs } from '../../../api/getBlogs';
import { Field, BlogCard, Button } from '../../../components';
import styles from './BlogSection.module.scss';

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsPerPage = 4;

  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getBlogs,
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const currentPosts = posts.slice(currentIndex, currentIndex + blogsPerPage);

  const handleMore = () => {
    const nextIndex = currentIndex + blogsPerPage;
    if (nextIndex >= posts.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <Field
          label="Blog"
          title="Read our newest blog post right away"
          className="introTextWrapper"
        />
        <div className={styles.blogCards}>
          {currentPosts.map((post) => (
            <BlogCard key={post.id} item={post} />
          ))}
        </div>
        <Button text="More" className={styles.btnBlog} onClick={handleMore} />
      </div>
    </section>
  );
};

export default BlogSection;
