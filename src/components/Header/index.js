import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p className={styles.logo}>start over</p>

        <button
          className={styles.burgerMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>}

        <div className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {isMenuOpen && (
            <button
              className={styles.closeMenu}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✖
            </button>
          )}

          <ul>
            <li className={styles.navItem}>
              <Link to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/hotels" className={styles.link} onClick={() => setIsMenuOpen(false)}>
                Hotels
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/blog" className={styles.link} onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.burgerActions}>
            <button className={styles.themeToggle} onClick={() => dispatch(toggleTheme())}>
              Toggle Theme
            </button>
            <Link to="/signin" className={styles.signIn} onClick={() => setIsMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
