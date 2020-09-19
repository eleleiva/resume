import React from 'react';

function Experience({ experience }) {
  return (
    <article key={experience.company}>
      <h3>
        {experience.company} ({experience.years})
      </h3>
      <p>{experience.description}</p>
    </article>
  );
}

export { Experience };
