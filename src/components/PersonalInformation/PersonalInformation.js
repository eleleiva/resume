import React from "react";

import styles from "./PersonalInformation.module.css";

const PersonalInformation = () => (
  <section>
    <article>
      <h1 className={styles.name}>Luca Leiva</h1>
      <h2 className={styles.location}>Montevideo, Uruguay</h2>
      <p>
        Curious and detail-oriented full-stack developer who strives to deliver
        quality and customer satisfaction on every PR.
      </p>
    </article>
  </section>
);

export default PersonalInformation;
