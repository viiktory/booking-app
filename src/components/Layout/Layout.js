import { Outlet } from 'react-router-dom';
import { Header, Footer, ScrollToTop } from '../../components';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <ScrollToTop />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
