import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getAdvantages } from '../../../api/getAdvantages';
import { Field, AdvantageCard, AnimatedSection } from '../../../components';
import styles from './AdvantageSection.module.scss';

const AdvantageSection = () => {
  const {
    data: advantages = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ['advantages'],
    queryFn: getAdvantages
  });

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <section className={styles.advantageSectionContainer}>
      <AnimatedSection viewport={{ once: true, amount: 0.3 }}>
        <div className={styles.advantageSectionContent}>
          <Field
            label="About Us"
            title="Why Choose Us?"
            className="introTextWrapper customColor"
          />
          <div className={styles.advantageSectionSwiper}>
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {advantages.map((item) => (
                <SwiperSlide key={item.id}>
                  <AdvantageCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AdvantageSection;
