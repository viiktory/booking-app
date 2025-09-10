import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItemLink = ({ to = '', label, className }) => {
  return (
    <li>
      <Link to={to} className={className}>
        {label}
      </Link>
    </li>
  );
};

NavItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default NavItemLink;
