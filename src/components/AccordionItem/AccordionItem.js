import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './AccordionItem.module.scss';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 className={styles.accordionHeader} onClick={() => setOpen(!open)}>
        {title}
        <FaChevronDown className={`${styles.chevron} ${open ? styles.rotate : ''}`} />
      </h3>
      <ul className={open ? styles.open : styles.closed}>{children}</ul>
    </div>
  );
};

export default AccordionItem;
