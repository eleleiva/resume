import { getTimespan } from 'utils/date';

function Experience({ experience }) {
  return (
    <article>
      <h3>
        {experience.company} ({getTimespan(experience)})
      </h3>
      <p>{experience.description}</p>
    </article>
  );
}

export { Experience };
