import React from 'react';

import Study from './Study';

const studies = [
  {
    years: '2016-2018',
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

const Studies = () => (
  <>
    <h2>Studies</h2>
    <section>
      {studies.map((study) => (
        <Study key={JSON.stringify(study)} study={study} />
      ))}
    </section>
  </>
);

export default Studies;
