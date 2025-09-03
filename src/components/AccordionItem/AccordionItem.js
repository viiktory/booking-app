import { FaChevronDown } from 'react-icons/fa';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {

  return (
    <div className={styles.accordionItem}>
      <h3 className={styles.accordionHeader} onClick={onToggle}>
        {title}
        <FaChevronDown className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`} />
      </h3>
      <ul className={`${styles.content} ${isOpen ? styles.open : ''}`}>{children}</ul>
    </div>
  );
};

export default AccordionItem;
