import { cn } from '@/shared/utils/classnames';
import styles from './styles.module.scss';

type Sizes = 'l' | 'm' | 's';
type Colors = 'white' | 'black';
type Aligns = 'left' | 'center' | 'right';

type Props = {
  size?: Sizes;
  color?: Colors;
  align?: Aligns;
  className?: string;
};

export const Typography = ({
  size = 'm',
  color = 'black',
  align,
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <span
      className={cn(
        styles.typography,
        styles[`typography_size_${size}`],
        styles[`typography_color_${color}`],
        {
          [styles[`typography_align_${align}`]]: align,
        },
        className,
      )}
    >
      {children}
    </span>
  );
};
