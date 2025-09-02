import PropTypes from 'prop-types';

const NavItemExternal = ({ to, icon, label, className }) => {
  return (
    <li>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
      >
        {icon && <span className="icon">{icon}</span>}
        {label}
      </a>
    </li>
  );
};

NavItemExternal.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default NavItemExternal;
