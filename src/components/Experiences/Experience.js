import React from 'react';

const Experience = ({ experience }) => (
  <article key={experience.company}>
    <h3>{experience.title}</h3>
    <h4>{experience.company}</h4>
    <h5>{experience.years}</h5>
    <p>{experience.description}</p>
  </article>
);

export default Experience;
