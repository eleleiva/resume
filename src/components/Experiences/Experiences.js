import { Experience } from './Experience';

import styles from './Experiences.module.css';

function Experiences({ jobs }) {
  return (
    <>
      <h2>Experience</h2>
      <section className={styles.experiences}>
        {jobs.map((job) => (
          <Experience key={job.id} experience={job} />
        ))}
      </section>
    </>
  );
}

export { Experiences };
