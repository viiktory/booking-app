import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { fetchReviews } from '../../../api/fetchReviews';
import { Field, ReviewsCard } from '../../../components';
import styles from './ReviewsSection.module.scss';

const ReviewsSection = () => {
  const {
    data: review = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.reviewsSectionContainer}>
      <div className={styles.reviewsSectionContent}>
        <Field
          label="Reviews"
          title="We trust our customers and they trust us to"
          className="introTextWrapper"
        />
        <div className={styles.reviewsSectionSwiper}>
          <Swiper modules={[Navigation]} navigation={true} slidesPerView={1}>
            {review.map((item) => (
              <SwiperSlide key={item.id}>
                <ReviewsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
