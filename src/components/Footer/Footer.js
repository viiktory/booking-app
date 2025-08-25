import { Link } from 'react-router-dom';
import { PATHS } from '../../paths';
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa';
import { NavItemExternal, NavItemLink, ContactItem, AccordionItem } from '../../components';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <h1 className={styles.footerLogo}>
            <Link to={PATHS.HOME}>start over</Link>
          </h1>
          <p>Your trusted hotel booking partner</p>
          <div className={styles.footerSocial}>
            <NavItemExternal
              icon={<FaFacebook />}
              to="https://facebook.com"
              label=""
              className={styles.footerSocialLink}
            />
            <NavItemExternal
              icon={<FaGoogle />}
              to="https://google.com"
              label=""
              className={styles.footerSocialLink}
            />
            <NavItemExternal
              icon={<FaTelegram />}
              to="https://web.telegram.org/k/"
              label=""
              className={styles.footerSocialLink}
            />
          </div>
        </div>

        <div className={styles.footerLinks}>
          <AccordionItem title="Useful links">
            <NavItemLink className={styles.footerSocialLink} to={PATHS.HOME} label="FAQ" />
            <NavItemLink className={styles.footerSocialLink} to={PATHS.HOME} label="How it works" />
            <NavItemLink
              className={styles.footerSocialLink}
              to={PATHS.HOME}
              label="Terms & Conditions"
            />
            <NavItemLink className={styles.footerSocialLink} to={PATHS.HOME} label="Support" />
          </AccordionItem>
        </div>

        <div className={styles.footerLinks}>
          <AccordionItem title="Privacy">
            <NavItemLink className={styles.footerSocialLink} to={PATHS.HOME} label="About us" />
            <NavItemLink
              className={styles.footerSocialLink}
              to={PATHS.HOME}
              label="Privacy Policy"
            />
            <NavItemLink
              className={styles.footerSocialLink}
              to={PATHS.HOME}
              label="Cookie Policy"
            />
            <NavItemLink className={styles.footerSocialLink} to={PATHS.HOME} label="Contact us" />
          </AccordionItem>
        </div>

        <div className={styles.footerLinks}>
          <AccordionItem title="Contact info">
            <ContactItem
              icon={<FaEnvelope className={styles.footerIcon} />}
              to="mailto:info@startover.com"
              label=""
              placeholder="info@startover.com"
              className={styles.footerSocialLink}
            />
            <ContactItem
              icon={<FaPhone className={styles.footerIcon} />}
              to="tel:+1234567890"
              label=""
              placeholder="+1234567890"
              className={styles.footerSocialLink}
            />
            <ContactItem
              icon={<FaMapMarkerAlt className={styles.footerIcon} />}
              to="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
              label=""
              placeholder="123 Main Street, New York, USA"
              className={styles.footerSocialLink}
            />
          </AccordionItem>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Start Over. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
