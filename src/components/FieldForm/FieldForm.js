import styles from '../BookingForm/BookingForm.module.scss';
import PropTypes from 'prop-types';

const FieldForm = ({ label, name, type, register, errors, option }) => {
  const registerOptions = type === 'number' ? { valueAsNumber: true } : {};

  return (
    <div className={styles.formFieldWrapper}>
      <label className={styles.formLabel} htmlFor={name}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        {type === 'select' ? (
          <select id={name} {...register(name)} className={styles.formSelect}>
            {option.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input type={type} id={name} {...register(name, registerOptions)} />
        )}

        {errors && <p className={styles.error}>{errors.message}</p>}
      </div>
    </div>
  );
};

FieldForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default FieldForm;
