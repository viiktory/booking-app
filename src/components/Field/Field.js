import PropTypes from 'prop-types';

const Field = ({ label, title, description, className }) => {
  return (
    <div className={className}>
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};
export default Field;
