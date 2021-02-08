import { Study } from './Study';

import styles from './Studies.module.css';

const studies = [
  {
    years: '2016 - 2018',
    title: 'System Analyst',
    institute: 'BIOS',
    description: 'Learn the fundamentals on software engineering.',
  },
  {
    years: '2015',
    title: 'Java Developer',
    institute: 'Taller de informatica',
    description: 'Learn the basics on Java development.',
  },
  {
    years: '2015',
    title: 'PHP Developer',
    institute: 'Taller de informatica',
    description: 'Learn the basics on PHP development.',
  },
];

function Studies() {
  return (
    <>
      <h2>Studies</h2>
      <section className={styles.studies}>
        {studies.map((study) => (
          <Study key={study.title} study={study} />
        ))}
      </section>
    </>
  );
}

export { Studies };
