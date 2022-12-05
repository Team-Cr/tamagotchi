import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'password';
  placeholder: string;
  value?: string;
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  return (
    <>
      <input className={styles.input} {...props} />
    </>
  );
};
