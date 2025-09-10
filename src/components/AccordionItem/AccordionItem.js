import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionHeader}
        onClick={onToggle}
        type="button"
      >
        {title}
        <FaChevronDown
          className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
        />
      </button>
      <ul className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        {children}
      </ul>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func
};

export default AccordionItem;
