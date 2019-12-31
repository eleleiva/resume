import React from "react";

import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default MainLayout;
