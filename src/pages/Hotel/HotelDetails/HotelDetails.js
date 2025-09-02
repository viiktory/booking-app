import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FaArrowLeft } from 'react-icons/fa';
import { getHotelById } from '../../../api/getHotels';
import { Button, CardDetails } from '../../../components';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: hotel,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['hotel', id],
    queryFn: () => getHotelById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return 'Error!';
  if (!hotel) return <p>Hotel not found</p>;

  return (
    <section className="container">
      <Button
        text="Back"
        className="backBtn"
        onClick={() => navigate(-1)}
        icon={FaArrowLeft}
        iconPosition="left"
      />
      <CardDetails
        image={hotel.image}
        alt={hotel.name}
        name={hotel.name}
        hotelRating={hotel.hotel_rating}
        stars={hotel.stars}
        description={hotel.description}
        amenities={hotel.amenities}
        address={`${hotel.address}, ${hotel.city}, ${hotel.country}`}
        price={hotel.price_per_night}
        actionButton={<Button text="Book now" className="homeBtn" />}
      />
    </section>
  );
};

export default HotelDetails;
