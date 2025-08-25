import PropTypes from 'prop-types';

const ContactItem = ({ to, icon, label, placeholder, className }) => {
  return (
    <li>
      <a href={to} className={className}>
        {icon} {label && <span>{label}</span>} {placeholder && <span>{placeholder}</span>}
      </a>
    </li>
  );
};

ContactItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default ContactItem;
