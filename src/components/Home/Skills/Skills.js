import {
  faReact,
  faJsSquare,
  faNodeJs,
  faConnectdevelop,
  faHtml5,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCodeBranch,
  faDatabase,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

import { Skill } from './Skill';

import styles from './Skills.module.css';

const skills = [
  {
    skill: 'React',
    icon: faReact,
  },
  {
    skill: 'JavaScript',
    icon: faJsSquare,
  },
  {
    skill: 'Node.js',
    icon: faNodeJs,
  },
  {
    skill: 'Git',
    icon: faCodeBranch,
  },
  {
    skill: 'SQL',
    icon: faDatabase,
  },
  {
    skill: 'Ruby on Rails',
    icon: faGem,
  },
  {
    skill: 'Ruby',
    icon: faGem,
  },
  {
    skill: 'GraphQL',
    icon: faConnectdevelop,
  },
  {
    skill: 'TypeScript',
    icon: faJsSquare,
  },
  {
    skill: 'HTML',
    icon: faHtml5,
  },
  {
    skill: 'CSS',
    icon: faCss3Alt,
  },
];

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ol className={styles.skills}>
        {skills.map(({ skill, icon }) => (
          <Skill key={skill} skill={skill} icon={icon} />
        ))}
      </ol>
    </>
  );
}

export { Skills };
