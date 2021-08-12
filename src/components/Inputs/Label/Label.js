import styles from './Label.module.css';

function Label({ children, errors, label, name }) {
  return (
    <label className={styles.label} htmlFor={name}>
      <div className={styles.container}>
        <span className={styles.labelText}>{label}</span>
        {children}
        {errors ? <span className={styles.error}>{errors}</span> : null}
      </div>
    </label>
  );
}

export { Label };
