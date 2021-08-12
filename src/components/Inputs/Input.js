import { Label } from './Label';

import styles from './Input.module.css';

function Input({ eventClass, errors, label, name, placeholder, register }) {
  return (
    <Label errors={errors} label={label} name={name}>
      <input
        className={`${styles.input} ${eventClass ?? ''}`}
        id={name}
        placeholder={placeholder}
        type="text"
        {...register(name)}
      />
    </Label>
  );
}

export { Input };
