import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '../../../api/getBlogs';
import useLikesStore from '../../../store/useLikesStore';
import { FaArrowLeft } from 'react-icons/fa';
import { Button, CardDetails, AnimatedSection } from '../../../components';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { likedPosts, toggleLike } = useLikesStore();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getBlogById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;
  if (!post) return <p>Blog not found</p>;

  const isLiked = likedPosts[post.id];
  const likesCount = post.likes + (isLiked ? 1 : 0);

  return (
    <section style={{ background: '#f9fafb' }}>
      <div className="container">
        <Button
          text="Back"
          className="backBtn"
          onClick={() => navigate(-1)}
          icon={FaArrowLeft}
          iconPosition="left"
        />
        <AnimatedSection viewport={{ once: true }}>
          <CardDetails
            image={post.image}
            alt={post.alt}
            title={post.title}
            category={post.category}
            readTime={post.readTime}
            description={post.description}
            author={post.author}
            data={post.data}
            views={post.views}
            likes={likesCount}
            onclick={() => toggleLike(post.id)}
            isLiked={isLiked}
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogDetails;
