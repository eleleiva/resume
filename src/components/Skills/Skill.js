import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Skills.module.css';

const Skill = ({ skill, icon }) => (
  <li className={styles.skill}>
    <span>{skill}</span>
    <FontAwesomeIcon icon={icon} />
  </li>
);

export default Skill;
