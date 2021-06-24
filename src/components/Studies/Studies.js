import { Study } from './Study';

import styles from './Studies.module.css';

function Studies({ studies }) {
  return (
    <>
      <h2>Studies</h2>
      <section className={styles.studies}>
        {studies.map((study) => (
          <Study key={study.id} study={study} />
        ))}
      </section>
    </>
  );
}

export { Studies };
