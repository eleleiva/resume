import React from "react";

const Study = ({ study }) => (
  <article>
    <h3>{study.title}</h3>
    <h4>{study.institute}</h4>
    <h5>{study.years}</h5>
    <p>{study.description}</p>
  </article>
);

export default Study;
