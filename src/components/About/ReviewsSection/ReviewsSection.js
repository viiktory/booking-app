import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getReviews } from '../../../api/getReviews';
import { Field, ReviewsCard, AnimatedSection } from '../../../components';
import styles from './ReviewsSection.module.scss';

const ReviewsSection = () => {
  const {
    data: review = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.reviewsSectionContainer}>
      <AnimatedSection viewport={{ once: true, amount: 0.3 }}>
        <div className={styles.reviewsSectionContent}>
          <Field
            label="Reviews"
            title="We trust our customers and they trust us to"
            className="introTextWrapper"
          />
          <div className={styles.reviewsSectionSwiper}>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: `.${styles.prevBtn}`,
                nextEl: `.${styles.nextBtn}`,
              }}
              slidesPerView={1}
            >
              {review.map((item) => (
                <SwiperSlide key={item.id}>
                  <ReviewsCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className={`${styles.prevBtn} swiper-button-prev`}></button>
            <button className={`${styles.nextBtn} swiper-button-next`}></button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ReviewsSection;
