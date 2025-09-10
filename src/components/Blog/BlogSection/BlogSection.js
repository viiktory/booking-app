import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBlogs } from '../../../api/getBlogs';
import { Field, BlogCard, Button, AnimatedSection } from '../../../components';
import styles from './BlogSection.module.scss';

const BlogSection = () => {
  const [blogVisible, setBlogVisible] = useState(4);

  const {
    data: posts = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getBlogs
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  const handleMore = () => {
    setBlogVisible((prev) => prev + blogVisible);
  };

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <Field
          label="Blog"
          title="Read our newest blog post right away"
          className="introTextWrapper"
        />
        <AnimatedSection viewport={{ once: true }}>
          <div className={styles.blogCards}>
            {posts.slice(0, blogVisible).map((post) => (
              <BlogCard key={post.id} item={post} />
            ))}
          </div>

          {blogVisible < posts.length && (
            <Button
              text="More"
              className={styles.btnBlog}
              onClick={handleMore}
            />
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
