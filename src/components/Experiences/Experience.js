function Experience({ experience }) {
  return (
    <article>
      <h3>
        {experience.company} ({experience.years})
      </h3>
      <p>{experience.description}</p>
    </article>
  );
}

export { Experience };
