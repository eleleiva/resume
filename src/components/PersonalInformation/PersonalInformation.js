import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PersonalInformation.module.css';
import photo from './portrait.png';

function PersonalInformation() {
  return (
    <section>
      <article className={styles.article}>
        <h1 className={styles.name}>Luca Leiva</h1>
        <img alt="Luca" className={styles.photo} src={photo} />
        <p className={styles.description}>
          Curious and detail-oriented full-stack developer who strives to
          deliver quality and customer satisfaction on every PR.
        </p>
        <p>Montevideo, Uruguay</p>
      </article>
      <article className={styles.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/luca-leiva-gonzalez/"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={['fab', 'linkedin']}
            aria-hidden="true"
          />
          <span className={styles.hidden}>LinkedIn Profile</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lucaleivaloop"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={['fab', 'github']}
            aria-hidden="true"
          />
          <span className={styles.hidden}>GitHub Profile</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva248/resume"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon="code"
            aria-hidden="true"
          />
          <span className={styles.hidden}>GitHub Repository</span>
        </a>
      </article>
    </section>
  );
}

export { PersonalInformation };
