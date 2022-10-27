import { Label } from './Label';

import styles from './Input.module.css';

function Textarea({ errors, label, name, placeholder, register }) {
  return (
    <Label errors={errors} label={label} name={name}>
      <textarea
        className={styles.input}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
    </Label>
  );
}

export { Textarea };
