import {useQuery} from '@tanstack/react-query';
import {getBlogs} from '../../../api/getBlogs';
import {Field, BlogCard} from '../../../components';
import styles from './BlogSection.module.scss';

const BlogSection = () => {
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

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <Field
          label="Blog"
          title="Read our newest blog post right away"
          className="introTextWrapper"
        />
        <div className={styles.blogCards}>
          {posts.map((post) => (
            <BlogCard key={post.id} item={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
