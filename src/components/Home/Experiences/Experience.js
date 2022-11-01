import { MDXRemoteWrapper } from 'components/MDXRemoteWrapper';
import { getTimespan } from 'utils/date';

import styles from './Experiences.module.css';

function Experience({ experience }) {
  const title = `${experience.company} (${getTimespan(experience)})`;

  return (
    <article className={styles.experience}>
      <h3 className={styles.title}>{title}</h3>
      <MDXRemoteWrapper {...experience.description} />
    </article>
  );
}

export { Experience };
