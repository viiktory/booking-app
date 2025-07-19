import PropTypes from 'prop-types';

const NavItem = ({ to = '', label, icon, target, className }) => {
  const isExternal = to.startsWith('http');

  if (isExternal) {
    return (
      <li>
        <a href={to} className={className} target={target} rel="noopener noreferrer">
          {icon && <span className="nav-icon">{icon}</span>}
          {label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a href={to} className={className}>
        {icon && <span className="nav-icon">{icon}</span>}
        {label}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default NavItem;
