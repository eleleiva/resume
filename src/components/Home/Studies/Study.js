import { MDXRemote } from 'next-mdx-remote';

import { getTimespan } from 'utils/date';

import styles from './Studies.module.css';

function Study({ study }) {
  const institute = `${study.institute} (${getTimespan(study)})`;

  return (
    <article className={styles.study}>
      <h3>{study.title}</h3>
      <h4 className={styles.subtitle}>{institute}</h4>
      <MDXRemote {...study.description} />
    </article>
  );
}

export { Study };
