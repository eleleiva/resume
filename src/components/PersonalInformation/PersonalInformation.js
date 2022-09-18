import Image from 'next/image';

import { GithubIcon } from 'assets/icons/GithubIcon';
import { CodeIcon } from 'assets/icons/CodeIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
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
          I&apos;m a web developer whose main focus is front-end development. I
          always try my best to improve users as well as developers&apos;
          experience in every project I lay hands on.
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
          <LinkedInIcon className={styles.icon} aria-hidden="true" />
          <span className={styles.hidden}>LinkedIn Profile</span>
        </a>
        <a
          className="umami--click--github-profile-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/eleleiva"
        >
          <GithubIcon className={styles.icon} aria-hidden="true" />
          <span className={styles.hidden}>GitHub Profile</span>
        </a>
        <a
          className="umami--click--github-repo-link"
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
        <a
          className="umami--click--path-finder-link"
          href="https://path-finder.lucaleiva.com"
        >
          Path finder
        </a>
        <a
          className="umami--click--typify-link"
          href="https://typify.lucaleiva.com"
        >
          Typify
        </a>
      </article>
    </section>
  );
}

export { PersonalInformation };
