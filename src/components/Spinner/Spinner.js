import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.firstBouncer} />
      <div className={styles.secondBouncer} />
    </div>
  );
}

export { Spinner };
