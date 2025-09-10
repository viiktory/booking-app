import PropTypes from 'prop-types';
import styles from './FieldForm.module.scss';

const FieldForm = ({
  label,
  name,
  type,
  placeholder,
  register,
  registerOptions,
  errors,
  option,
  rules,
  vertical = false
}) => {
  return (
    <div
      className={`${styles.formFieldWrapper} ${vertical ? styles.vertical : ''}`}
    >
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {type === 'select' ? (
          <select
            id={name}
            {...register(name, rules)}
            className={`${styles.formInput} ${errors ? styles.errorInput : ''}`}
          >
            {option.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            id={name}
            placeholder={placeholder}
            {...register(name)}
            className={`${styles.formTextarea} ${errors ? styles.errorInput : ''}`}
          />
        ) : (
          <input
            type={type}
            id={name}
            placeholder={placeholder}
            {...register(name, registerOptions)}
            className={`${styles.formInput} ${errors ? styles.errorInput : ''}`}
          />
        )}

        {errors && <p className={styles.error}>{errors.message}</p>}
      </div>
    </div>
  );
};

FieldForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  registerOptions: PropTypes.func,
  errors: PropTypes.object,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  rules: PropTypes.object,
  vertical: PropTypes.bool
};

export default FieldForm;
