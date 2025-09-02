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
          <div className={styles.footerSocialLinks}>
            <NavItemExternal
              icon={<FaFacebook className={styles.footerSocialIcons} />}
              to="https://facebook.com"
              label=""
            />
            <NavItemExternal
              icon={<FaGoogle className={styles.footerSocialIcons} />}
              to="https://google.com"
              label=""
            />
            <NavItemExternal
              icon={<FaTelegram className={styles.footerSocialIcons} />}
              to="https://web.telegram.org/k/"
              label=""
            />
          </div>
        </div>

        <div>
          <AccordionItem title="Useful links">
            <NavItemLink className={styles.footerLink} to={PATHS.HOME} label="FAQ" />
            <NavItemLink className={styles.footerLink} to={PATHS.HOME} label="How it works" />
            <NavItemExternal
              className={styles.footerLink}
              to="https://www.icertis.com/contracting-basics/what-are-terms-and-conditions/"
              label="Terms & Conditions"
            />
            <NavItemExternal
              className={styles.footerLink}
              to="https://en.wikipedia.org/wiki/Support_and_resistance"
              label="Support"
            />
          </AccordionItem>
        </div>

        <div>
          <AccordionItem title="Privacy">
            <NavItemLink className={styles.footerLink} to={PATHS.ABOUT_PAGE} label="About us" />
            <NavItemExternal
              className={styles.footerLink}
              to="https://en.wikipedia.org/wiki/Privacy_policy"
              label="Privacy Policy"
            />
            <NavItemExternal
              className={styles.footerLink}
              to="https://en.wikipedia.org/wiki/HTTP_cookie"
              label="Cookie Policy"
            />
            <NavItemLink className={styles.footerLink} to={PATHS.CONTACTS} label="Contact us" />
          </AccordionItem>
        </div>

        <div>
          <AccordionItem title="Contact info">
            <ContactItem
              icon={<FaEnvelope className={styles.footerIcons} />}
              to="mailto:info@startover.com"
              label=""
              placeholder="info@startover.com"
              className={styles.footerLink}
            />
            <ContactItem
              icon={<FaPhone className={styles.footerIcons} />}
              to="tel:+1234567890"
              label=""
              placeholder="+1234567890"
              className={styles.footerLink}
            />
            <ContactItem
              icon={<FaMapMarkerAlt className={styles.footerIcons} />}
              to="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
              label=""
              placeholder="123 Main Street, New York, USA"
              className={styles.footerLink}
            />
          </AccordionItem>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Start Over. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
