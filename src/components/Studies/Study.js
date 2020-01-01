import React from 'react';

const Study = ({ study }) => (
  <article>
    <h3>{study.title}</h3>
    <h4>
      {study.institute} ({study.years})
    </h4>
    <p>{study.description}</p>
  </article>
);

export default Study;
