import { InputHTMLAttributes } from 'react';
import styles from './ProfileInput.module.scss';

export interface ProfileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const ProfileInput = (props: ProfileInputProps) => {
  const { label, value, ...inputProps } = props;
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <input type='text' className={styles.input__value} value={value || ''} {...inputProps} />
    </label>
  );
};
