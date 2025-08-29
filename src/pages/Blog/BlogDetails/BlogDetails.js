import { CardDetails } from '../../../components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '../../../api/getBlogs';

const BlogDetails = () => {
  const { id } = useParams();

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
  );
};

export default BlogDetails;
