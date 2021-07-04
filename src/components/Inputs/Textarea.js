import styles from './Input.module.css';

function Textarea({ eventClass, errors, label, name, placeholder, register }) {
  return (
    <label className={styles.label} htmlFor={name}>
      <span className={styles.labelText}>{label}</span>
      <textarea
        className={`${styles.input} ${eventClass ?? ''}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors ? <span className={styles.error}>{errors}</span> : null}
    </label>
  );
}

export { Textarea };
