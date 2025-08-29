import { PATHS } from '../../../paths';
import { CartItem } from '../../../components';
import { FaRegEye, FaHeart } from 'react-icons/fa';

const BlogCard = ({ item }) => {
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
          <span>
            <FaHeart /> {item.likes}
          </span>
        </>
      }
    />
  );
};

export default BlogCard;
