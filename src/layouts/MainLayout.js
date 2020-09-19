import React from 'react';

import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export { MainLayout };
