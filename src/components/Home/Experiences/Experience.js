import { MDXRemote } from 'next-mdx-remote';

import { getTimespan } from 'utils/date';
import { components } from 'utils/mdComponents';

import styles from './Experiences.module.css';

function Experience({ experience }) {
  const title = `${experience.company} (${getTimespan(experience)})`;

  return (
    <article className={styles.experience}>
      <h3 className={styles.title}>{title}</h3>
      <MDXRemote {...experience.description} components={components} />
    </article>
  );
}

export { Experience };
