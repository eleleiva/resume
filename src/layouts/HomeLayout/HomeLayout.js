import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export { HomeLayout };
