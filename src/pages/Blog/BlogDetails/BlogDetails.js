import { Button, CardDetails } from '../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '../../../api/getBlogs';
import { FaArrowLeft } from 'react-icons/fa';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  return (
    <section style={{ background: '#f9fafb'}}>
      <div className="container">
      <Button
        text="Back"
        className="backBtn"
        onClick={() => navigate(-1)}
        icon={FaArrowLeft}
        iconPosition="left"
      />
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
        likes={post.likes}
      />
      </div>
    </section>
  );
};

export default BlogDetails;
