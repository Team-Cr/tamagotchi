import styles from './Input.module.scss';

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'password';
  value: string;
  placeholder: string;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        className={styles.input}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />
    </>
  );
};

export { Input };
