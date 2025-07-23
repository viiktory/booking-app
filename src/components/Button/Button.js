import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Button = ({ type, text, className, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled>
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
};

export default Button;
