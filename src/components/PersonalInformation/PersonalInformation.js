import Image from 'next/image';

import { GithubIcon } from 'assets/icons/GithubIcon';
import { CodeIcon } from 'assets/icons/CodeIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import picture from '../../../public/ll.webp';
import styles from './PersonalInformation.module.css';

function PersonalInformation() {
  return (
    <section>
      <article>
        <h1 className={styles.name}>Luca Leiva</h1>
        <div className={styles.photoContainer}>
          <Image
            alt="Luca"
            placeholder="blur"
            style={{ height: '35vh', width: 'auto' }}
            src={picture}
            priority
          />
        </div>
        <p className={styles.description}>
          I&apos;m a web developer whose main focus is front-end development. I
          always try my best to improve users as well as developers&apos;
          experience in every project I lay hands on.
        </p>
        <p>Montevideo, Uruguay</p>
      </article>
      <article className={styles.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/luca-leiva-gonzalez/"
        >
          <LinkedInIcon className={styles.icon} aria-hidden="true" />
          <span className={styles.hidden}>LinkedIn Profile</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva"
        >
          <GithubIcon className={styles.icon} aria-hidden="true" />
          <span className={styles.hidden}>GitHub Profile</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva/resume"
        >
          <CodeIcon className={styles.icon} aria-hidden="true" />
          <span className={styles.hidden}>GitHub Repository</span>
        </a>
      </article>
      <article className={styles.sillyAppsContainer}>
        <h2>Silly apps: </h2>
        <a href="https://path-finder.lucaleiva.com">Path finder</a>
        <a href="https://typify.lucaleiva.com">Typify</a>
      </article>
    </section>
  );
}

export { PersonalInformation };
