import { PATHS } from '../../../paths';
import { CartItem } from '../../../components';

const HotelCard = ({ item }) => {
  return (
    <CartItem
      to={`${PATHS.HOTELS.details.replace(':id', item.id)}`}
      image={item.image}
      alt={`Image of ${item.name}`}
      header={item.name}
      subheader={`${item.hotel_rating} ★`}
      meta={
        <>
          <address>
            {item.address}, {item.city}, {item.country}
          </address>
          <p> {item.phone_number}</p>
        </>
      }
    />
  );
};

export default HotelCard;
