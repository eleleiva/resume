import React from 'react';

import Experience from './Experience';

const experiences = [
  {
    years: '2017-Present',
    title: 'Developer',
    company: 'Loop Studio',
    description:
      "Work on many projects mainly developing on React and Ruby on Rails while trying to improve Loop Studio by contributing ideas, resources and helping make our processes better, other tasks I'm currently involved in are reviewing code from several projects and helping estimate projects.",
  },
  {
    years: '2016-2017',
    title: 'Developer',
    company: 'Programa Uruguay',
    description:
      'Developed plugins for WordPress sites using ES5 and PHP while being the only developer of the company settings standards and improving the processes with the other sectors.',
  },
];

const Experiences = () => (
  <>
    <h2>Experience</h2>
    <section>
      {experiences.map((experience) => (
        <Experience key={JSON.stringify(experience)} experience={experience} />
      ))}
    </section>
  </>
);

export default Experiences;
