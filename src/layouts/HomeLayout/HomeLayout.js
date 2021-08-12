import { SEO } from 'components/SEO';

import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
  return (
    <div className={styles.container}>
      <SEO />
      {children}
    </div>
  );
}

export { HomeLayout };
