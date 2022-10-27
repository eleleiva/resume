import styles from './Button.module.css';

function Button({ disabled, label }) {
  return (
    <button className={styles.button} disabled={disabled} type="submit">
      {label}
    </button>
  );
}

export { Button };
