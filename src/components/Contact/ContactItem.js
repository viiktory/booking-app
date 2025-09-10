import PropTypes from 'prop-types';

const ContactItem = ({ to, icon, label, placeholder, className }) => {
  return (
    <li>
      <a href={to} target="_blank" className={className} rel="noreferrer">
        {icon} {label && <span>{label}</span>}{' '}
        {placeholder && <span>{placeholder}</span>}
      </a>
    </li>
  );
};

ContactItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
};

export default ContactItem;
