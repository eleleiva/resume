import React from 'react';

import Skill from './Skill';
import styles from './Skills.module.css';

const skills = [
  'React',
  'Ruby on Rails',
  'JavaScript',
  'Ruby',
  'Git',
  'SQL',
  'GraphQL',
  'TypeScript',
  'HTML',
  'CSS',
  'Node.js',
  'PHP',
  'WordPress',
  'Java',
  'C#',
];

const Skills = () => (
  <>
    <h2>Skills</h2>
    <ol className={styles.skills}>
      {skills.map((skill) => (
        <Skill key={skill} skill={skill} />
      ))}
    </ol>
  </>
);

export default Skills;
