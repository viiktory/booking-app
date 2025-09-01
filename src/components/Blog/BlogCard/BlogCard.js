import { useState } from 'react';
import { PATHS } from '../../../paths';
import { CartItem } from '../../../components';
import { FaRegEye, FaHeart } from 'react-icons/fa';

const BlogCard = ({ item }) => {
  const [likes, setLikes] = useState(item.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  return (
    <CartItem
      to={`${PATHS.BLOG.details.replace(':id', item.id)}`}
      image={item.image}
      alt={item.alt}
      header={item.title}
      subheader={item.description}
      meta={
        <>
          <time>{item.date}</time>
        </>
      }
      footer={
        <>
          <span>
            <FaRegEye /> {item.views}
          </span>
          <span
            style={{
              color: liked ? 'red' : 'inherit',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
            onClick={handleLike}
          >
            <FaHeart /> {likes}
          </span>
        </>
      }
    />
  );
};

export default BlogCard;
