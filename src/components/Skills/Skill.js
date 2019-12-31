import React from 'react';

import styles from './Skills.module.css';

const Skill = ({ skill }) => <li className={styles.skill}>{skill}</li>;

export default Skill;
