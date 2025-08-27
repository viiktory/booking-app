import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ type, text, to, className, onClick, disabled, icon: Icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className={className} type={type} onClick={handleClick} disabled={disabled}>
      {text}
      {Icon && <Icon className="arrow-icon" />}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

export default Button;
