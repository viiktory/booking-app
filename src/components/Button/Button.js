import { FiArrowRight } from 'react-icons/fi';

const Button = ({type, text, className, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled>
      {text}
      <FiArrowRight className="arrow-icon" />
    </button>
  );
};

export default Button;
