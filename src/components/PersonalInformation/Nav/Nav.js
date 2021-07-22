import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RoughNotation } from 'react-rough-notation';

import styles from './Nav.module.css';

const HIGHLIGHT_COLOR = 'rgba(163,243,7, 0.3)';

function Nav() {
  const { pathname } = useRouter();

  return (
    <nav>
      <article>
        <h2>More about: </h2>
        <ul className={styles.aboutList}>
          <li>
            <RoughNotation
              type="highlight"
              color={HIGHLIGHT_COLOR}
              show={pathname === '/'}
            >
              <Link href="/">Home</Link>
            </RoughNotation>
          </li>
          <li>
            <RoughNotation
              type="highlight"
              color={HIGHLIGHT_COLOR}
              show={pathname === '/about-me'}
            >
              <Link href="/about-me">About me</Link>
            </RoughNotation>
          </li>
          <li>
            <RoughNotation
              type="highlight"
              color={HIGHLIGHT_COLOR}
              show={pathname === '/about-site'}
            >
              <Link href="/about-site">About this site</Link>
            </RoughNotation>
          </li>
        </ul>
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
    </nav>
  );
}

export { Nav };
