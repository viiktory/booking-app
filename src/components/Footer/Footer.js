import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PATHS } from '../../paths';
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram
} from 'react-icons/fa';
import {
  NavItemExternal,
  NavItemLink,
  ContactItem,
  AccordionItem
} from '../../components';
import styles from './Footer.module.scss';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? false : index);
  };

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
              to="https://web.telegram.org"
              label=""
            />
          </div>
        </div>

        <div>
          <AccordionItem
            title="Useful links"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
          >
            <NavItemLink
              className={styles.footerLink}
              to={PATHS.FAQ}
              label="FAQ"
            />
            <NavItemLink
              className={styles.footerLink}
              to="/how-it-works"
              label="How it works"
            />
            <NavItemLink
              className={styles.footerLink}
              to="/terms"
              label="Terms & Conditions"
            />
            <NavItemLink
              className={styles.footerLink}
              to="/support"
              label="Support"
            />
          </AccordionItem>
        </div>

        <div>
          <AccordionItem
            title="Privacy"
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          >
            <NavItemLink
              className={styles.footerLink}
              to={PATHS.ABOUT_PAGE}
              label="About us"
            />
            <NavItemLink
              className={styles.footerLink}
              to="/privacy"
              label="Privacy Policy"
            />
            <NavItemLink
              className={styles.footerLink}
              to="/cookies"
              label="Cookie Policy"
            />
            <NavItemLink
              className={styles.footerLink}
              to={PATHS.CONTACTS}
              label="Contact us"
            />
          </AccordionItem>
        </div>

        <div>
          <AccordionItem
            title="Contact info"
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
          >
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
              to="https://www.google.com/maps"
              label=""
              placeholder="123 Main Street, New York, USA"
              className={styles.footerLink}
            />
          </AccordionItem>
        </div>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Start Over. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
