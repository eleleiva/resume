import styles from './Button.module.css';

function Button({ disabled, eventClass, label }) {
  return (
    <button
      className={`${styles.button} ${eventClass ?? ''}`}
      disabled={disabled}
      type="submit"
    >
      {label}
    </button>
  );
}

export { Button };
