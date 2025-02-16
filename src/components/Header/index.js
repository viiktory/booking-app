import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';

export default function Header() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);

    React.useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <p className={styles.logo}>start over</p>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/about" className={styles.link}>
                            About Us
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/hotels" className={styles.link}>
                            Hotels
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/blog" className={styles.link}>
                            Blog
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contact" className={styles.link}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <button
                    className={styles.themeToggle}
                    onClick={() => dispatch(toggleTheme())}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                <Link to="/signin" className={styles.signIn}>
                    Sign In
                </Link>
            </nav>
        </header>
    );
}

Header.propTypes = {
    theme: PropTypes.string,
};
