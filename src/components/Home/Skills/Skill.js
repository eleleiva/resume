import styles from './Skills.module.css';

function Skill({ skill, Icon }) {
  return (
    <li className={styles.skill}>
      <span>{skill}</span>
      <Icon className={styles.skillIcon} />
    </li>
  );
}

export { Skill };
