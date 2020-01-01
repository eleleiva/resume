import React from 'react';

import Skill from './Skill';
import styles from './Skills.module.css';

const skills = [
  {
    skill: 'React',
    icon: ['fab', 'react'],
  },
  {
    skill: 'Ruby on Rails',
    icon: 'gem',
  },
  {
    skill: 'JavaScript',
    icon: ['fab', 'js-square'],
  },
  {
    skill: 'Ruby',
    icon: 'gem',
  },
  {
    skill: 'Git',
    icon: 'code-branch',
  },
  {
    skill: 'SQL',
    icon: 'database',
  },
  {
    skill: 'GraphQL',
    icon: ['fab', 'connectdevelop'],
  },
  {
    skill: 'TypeScript',
    icon: ['fab', 'js'],
  },
  {
    skill: 'HTML',
    icon: ['fab', 'html5'],
  },
  {
    skill: 'CSS',
    icon: ['fab', 'css3-alt'],
  },
  {
    skill: 'Node.js',
    icon: ['fab', 'node-js'],
  },
  {
    skill: 'PHP',
    icon: ['fab', 'php'],
  },
  {
    skill: 'WordPress',
    icon: ['fab', 'wordpress-simple'],
  },
  {
    skill: 'Java',
    icon: ['fab', 'java'],
  },
  {
    skill: 'C#',
    icon: ['fab', 'microsoft'],
  },
];

const Skills = () => (
  <>
    <h2>Skills</h2>
    <ol className={styles.skills}>
      {skills.map(({ skill, icon }) => (
        <Skill key={skill} skill={skill} icon={icon} />
      ))}
    </ol>
  </>
);

export default Skills;
