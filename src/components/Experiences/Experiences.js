import { Experience } from './Experience';

import styles from './Experiences.module.css';

const experiences = [
  {
    years: '2021 - Present',
    title: 'Developer',
    company: 'Moove It',
    description:
      "Currently working as a Full Stack JS (React-Node) developer I just landed on my first project while getting my feet wet on the warming culture of Moove it, let's see what the future holds us.",
  },
  {
    years: '2017 - 2021',
    title: 'Developer',
    company: 'LoopStudio',
    description:
      'Worked on many projects mainly developing on React and Ruby on Rails while trying to improve LoopStudio by contributing ideas, resources, and help to make our processes better. I was also involved in other tasks such as reviewing code from several projects and helping estimate projects. Furthermore, I had the amazing challenge of leading a project for a couple of months making decisions that shaped up into a happy customer and an amazing product.',
  },
  {
    years: '2016 - 2017',
    title: 'Developer',
    company: 'Programa Uruguay',
    description:
      'Developed plugins for WordPress sites using ES5 and PHP while being the only developer of the company settings standards and improving the processes with the other sectors.',
  },
];

function Experiences() {
  return (
    <>
      <h2>Experience</h2>
      <section className={styles.experiences}>
        {experiences.map((experience) => (
          <Experience key={experience.company} experience={experience} />
        ))}
      </section>
    </>
  );
}

export { Experiences };
