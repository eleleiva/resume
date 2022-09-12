import { ReactIcon } from 'assets/icons/ReactIcon';
import { JSIcon } from 'assets/icons/JSIcon';
import { NodeIcon } from 'assets/icons/NodeIcon';
import { GitIcon } from 'assets/icons/GitIcon';
import { SQLIcon } from 'assets/icons/SQLIcon';
import { RubyIcon } from 'assets/icons/RubyIcon';
import { GraphQLIcon } from 'assets/icons/GraphQLIcon';
import { TypeScriptIcon } from 'assets/icons/TypeScriptIcon';
import { HTMLIcon } from 'assets/icons/HTMLIcon';
import { CSSIcon } from 'assets/icons/CSSIcon';
import { Skill } from './Skill';

import styles from './Skills.module.css';

const skills = [
  {
    skill: 'React',
    Icon: ReactIcon,
  },
  {
    skill: 'JavaScript',
    Icon: JSIcon,
  },
  {
    skill: 'Node.js',
    Icon: NodeIcon,
  },
  {
    skill: 'Git',
    Icon: GitIcon,
  },
  {
    skill: 'SQL',
    Icon: SQLIcon,
  },
  {
    skill: 'Ruby on Rails',
    Icon: RubyIcon,
  },
  {
    skill: 'Ruby',
    Icon: RubyIcon,
  },
  {
    skill: 'GraphQL',
    Icon: GraphQLIcon,
  },
  {
    skill: 'TypeScript',
    Icon: TypeScriptIcon,
  },
  {
    skill: 'HTML',
    Icon: HTMLIcon,
  },
  {
    skill: 'CSS',
    Icon: CSSIcon,
  },
];

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ol className={styles.skills}>
        {skills.map(({ skill, Icon }) => (
          <Skill key={skill} skill={skill} Icon={Icon} />
        ))}
      </ol>
    </>
  );
}

export { Skills };
