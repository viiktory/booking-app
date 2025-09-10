import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import FAQImg from '../../assets/images/faq.jpg';
import { getFAQ } from '../../api/getFAQ';
import { AccordionItem, AnimatedSection } from '../../components';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const {
    data: faqData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['faq'],
    queryFn: getFAQ
  });

  const [openIndex, setOpenIndex] = useState([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) return 'Loading...';
  if (isError) return 'Error!';

  return (
    <AnimatedSection viewport={{ once: true }}>
      <section className={styles.faqSection}>
        <img className={styles.faqImage} src={FAQImg} alt="FAQ" />
        <div className={styles.faqContent}>
          <h2 className={styles.faqTitle}>
            Frequently asked questions about hotel reservations
          </h2>
          <div className={styles.accordionItem}>
            {faqData?.map((item, index) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              >
                <p>{item.text}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FAQ;
