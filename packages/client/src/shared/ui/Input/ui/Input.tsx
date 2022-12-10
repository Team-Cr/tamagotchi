
import classNames from 'classnames';

import styles from './Input.module.scss';

type Props = React.HTMLProps<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return <input {...props} className={classNames(styles.input, className)} />;
};
