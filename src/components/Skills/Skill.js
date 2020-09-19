import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Skills.module.css';

function Skill({ skill, icon }) {
  return (
    <li className={styles.skill}>
      <span>{skill}</span>
      <FontAwesomeIcon icon={icon} />
    </li>
  );
}

export { Skill };
