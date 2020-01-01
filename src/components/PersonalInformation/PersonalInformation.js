import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PersonalInformation.module.css';
import photo from './portrait.png';

const PersonalInformation = () => (
  <section>
    <article>
      <h1 className={styles.name}>Luca Leiva</h1>
      <img className={styles.photo} src={photo} alt="" />
      <h2 className={styles.location}>Montevideo, Uruguay</h2>
      <p>
        Curious and detail-oriented full-stack developer who strives to deliver
        quality and customer satisfaction on every PR.
      </p>
    </article>
    <article className={styles.links}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/luca-leiva-gonzalez-9002a9130/"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} aria-hidden="true" />
        <span className={styles.hidden}>LinkedIn Profile</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/lucaleivaloop"
      >
        <FontAwesomeIcon icon={['fab', 'github']} aria-hidden="true" />
        <span className={styles.hidden}>GitHub Profile</span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/eleleiva248/resume"
      >
        <FontAwesomeIcon icon={'code'} aria-hidden="true" />
        <span className={styles.hidden}>GitHub Repository</span>
      </a>
    </article>
  </section>
);

export default PersonalInformation;
