import styles from './Input.module.css';

function Input({ eventClass, errors, label, name, placeholder, register }) {
  return (
    <label className={styles.label} htmlFor={name}>
      <span className={styles.labelText}>{label}</span>
      <input
        className={`${styles.input} ${eventClass ?? ''}`}
        placeholder={placeholder}
        type="text"
        {...register(name)}
      />
      {errors ? <span className={styles.error}>{errors}</span> : null}
    </label>
  );
}

export { Input };
