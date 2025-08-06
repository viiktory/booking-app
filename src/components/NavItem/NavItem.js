import PropTypes from 'prop-types';

const NavItem = ({ to = '', label, icon, target, placeholder, className }) => {
  const isExternal = to.startsWith('http');

  if (isExternal) {
    return (
      <li>
        <a href={to} className={className} target={target} rel="noopener noreferrer">
          {icon && <span className="nav-icon">{icon}</span>}
          {label}
          {placeholder && <span className="nav-placeholder">{placeholder}</span>}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a href={to} className={className}>
        {icon && <span className="nav-icon">{icon}</span>}
        {label}
        {placeholder && <span className="nav-placeholder">{placeholder}</span>}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  target: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default NavItem;
