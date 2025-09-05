import { FaRegEye, FaHeart } from 'react-icons/fa';
import { PATHS } from '../../../paths';
import useLikesStore from '../../../store/useLikesStore';
import { CartItem } from '../../../components';

const BlogCard = ({ item }) => {
  const { likedPosts, toggleLike } = useLikesStore();
  const isLiked = likedPosts[item.id];

  const likesCount = item.likes + (isLiked ? 1 : 0);

  return (
    <CartItem
      to={`${PATHS.BLOG.details.replace(':id', item.id)}`}
      image={item.image}
      alt={item.alt}
      header={item.title}
      subheader={item.description}
      meta={<time>{item.date}</time>}
      footer={
        <>
          <span>
            <FaRegEye /> {item.views}
          </span>
          <span
            onClick={(e) => {
              e.preventDefault();
              toggleLike(item.id);
            }}
            style={{
              color: isLiked ? 'red' : 'inherit',
            }}
          >
            <FaHeart /> {likesCount}
          </span>
        </>
      }
    />
  );
};

export default BlogCard;
