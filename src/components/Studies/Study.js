import { getTimespan } from 'utils/date';

function Study({ study }) {
  return (
    <article>
      <h3>{study.title}</h3>
      <h4>
        {study.institute} ({getTimespan(study)})
      </h4>
      <p>{study.description}</p>
    </article>
  );
}

export { Study };
