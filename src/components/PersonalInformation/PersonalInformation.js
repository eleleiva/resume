import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import picture from 'assets/images/ll.webp';
import styles from './PersonalInformation.module.css';

function PersonalInformation() {
  return (
    <section>
      <article>
        <h1 className={styles.name}>Luca Leiva</h1>
        <div className={styles.photoContainer}>
          <Image
            alt="Luca"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            size="35vh"
            src={picture}
            priority
          />
        </div>
        <p className={styles.description}>
          Curious and detail-oriented full-stack developer who strives to
          deliver quality and customer satisfaction on every PR.
        </p>
        <p>Montevideo, Uruguay</p>
      </article>
      <article className={styles.links}>
        <a
          className="umami--click--linked-in-link"
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
          className="umami--click--github-profile-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={['fab', 'github']}
            aria-hidden="true"
          />
          <span className={styles.hidden}>GitHub Profile</span>
        </a>
        <a
          className="umami--click--github-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva/resume"
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon="code"
            aria-hidden="true"
          />
          <span className={styles.hidden}>GitHub Repository</span>
        </a>
      </article>
      <article>
        <h2>Silly apps: </h2>
        <a
          className="umami--click--path-finder-link"
          href="https://path-finder.lucaleiva.com"
        >
          Path finder
        </a>
      </article>
    </section>
  );
}

export { PersonalInformation };
