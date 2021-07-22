import styles from './Emoji.module.css';

function Emoji({ emoji, label }) {
  return (
    <span aria-label={label} className={styles.emoji} role="img">
      {emoji}
    </span>
  );
}

export { Emoji };
