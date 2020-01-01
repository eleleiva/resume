import React from 'react';

const Experience = ({ experience }) => (
  <article key={experience.company}>
    <h4>
      {experience.company} ({experience.years})
    </h4>
    <p>{experience.description}</p>
  </article>
);

export default Experience;
