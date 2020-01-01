import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PersonalInformation.module.css';

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
    <article className={styles.links}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/luca-leiva-gonzalez-9002a9130/"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/lucaleivaloop"
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/eleleiva248/resume"
      >
        <FontAwesomeIcon icon={'code'} />
      </a>
    </article>
  </section>
);

export default PersonalInformation;
