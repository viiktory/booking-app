import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { PATHS } from '../../paths';
import { NavItemLink } from '../../components';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === PATHS.HOME;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={`navBox ${isHome ? 'navBox--home' : 'navBox--default'}`}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link to={PATHS.HOME}>start over</Link>
        </h1>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`${styles.navList} ${isOpen ? styles.activeNav : ''}`}>
          <NavItemLink className={styles.navItem} to={PATHS.HOME} label="Home" />
          <NavItemLink className={styles.navItem} to={PATHS.ABOUT} label="About us" />
          <NavItemLink className={styles.navItem} to={PATHS.HOTELS} label="Hotel" />
          <NavItemLink className={styles.navItem} to={PATHS.BLOG} label="Blog" />
          <NavItemLink className={styles.navItem} to={PATHS.CONTACTS} label="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
