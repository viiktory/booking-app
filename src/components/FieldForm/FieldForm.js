import PropTypes from 'prop-types';
import styles from './FieldForm.module.scss';

const FieldForm = ({
  label,
  name,
  type,
  register,
  errors,
  option,
  variant = 'booking',
  vertical = false,
}) => {
  return (
    <div className={`${styles.formFieldWrapper} ${vertical ? styles.vertical : ''}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {type === 'select' ? (
          <select id={name} {...register(name)} className={styles.formInput}>
            {option.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : type === 'textarea' ? (
          <textarea id={name} {...register(name)} className={styles.formTextarea} />
        ) : (
          <input type={type} id={name} {...register(name)} className={styles.formInput} />
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
  variant: PropTypes.string,
};

export default FieldForm;
