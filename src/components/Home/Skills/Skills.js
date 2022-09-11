import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons/faConnectdevelop';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faGem } from '@fortawesome/free-solid-svg-icons/faGem';

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
