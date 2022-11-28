import styles from './Input.module.scss';

interface InputProps {
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
