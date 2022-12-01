import styles from './Button.module.scss';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
  color: 'grey' | 'red';
  disabled?: boolean;
  text: string;
  icon: string;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <div className={styles.button__container}>
        <button
          className={`${styles.button} ${styles[props.color]}`}
          onClick={props.onClick}
          name={props.name}
          disabled={props.disabled}
        >
          {props.text}&nbsp;
          {props.icon ? <img className={styles.button__icon} src={props.icon} alt='gatito' /> : ''}
        </button>
      </div>
    </>
  );
};

export { Button };
