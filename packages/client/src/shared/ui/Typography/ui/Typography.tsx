import classNames from 'classnames';

import styles from './styles.module.scss';

type Sizes = 'l' | 'm' | 's';
type Colors = 'white' | 'black';
type Aligns = 'left' | 'center' | 'right';

type Props = {
  size?: Sizes;
  color?: Colors;
  align?: Aligns;
  className?: string;
  oneLine?: boolean;
};

export const Typography = ({
  size = 'm',
  color = 'black',
  align,
  children,
  className,
  oneLine
}: React.PropsWithChildren<Props>) => {
  return (
    <span
      className={classNames(
        styles.typography,
        styles[`typography_size_${size}`],
        styles[`typography_color_${color}`],
        {
          [styles[`typography_align_${align}`]]: align,
          [styles[`typography_oneLine`]]: oneLine,
        },
        className,
      )}
    >
      {children}
    </span>
  );
};
