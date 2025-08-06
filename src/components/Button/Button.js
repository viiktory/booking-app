import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Button = ({ type, text, className, onClick, disabled }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {text}
      <FiArrowRight className="arrow-icon" />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
