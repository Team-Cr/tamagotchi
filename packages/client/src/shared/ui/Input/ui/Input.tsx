import { cn } from '@/shared/utils/classnames';

import styles from './styles.module.scss';

type Props = React.HTMLProps<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return <input {...props} className={cn(styles.input, className)} />;
};
