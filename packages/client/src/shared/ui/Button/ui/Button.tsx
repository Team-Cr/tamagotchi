import { useClassNames } from '@/shared/lib/classname/useClassName';
import { Colors, ComponentProps, Dimensions } from '@/shared/ui/types';
import { ButtonHTMLAttributes } from 'react';
import css from './Button.module.scss';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLElement>,
    ComponentProps {
  size?: Dimensions;
  color?: Colors;
  disabled?: boolean;
  icon?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    size = 'medium',
    type = 'button',
    color = 'primary',
    classPrefix = 'button',
    icon,
    disabled,
    children,
    className,
    ...rest
  } = props;

  const { withClassPrefix, merge } = useClassNames(classPrefix, css);
  const classes = merge(className, withClassPrefix(color, size));

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
      {icon && (
        <img
          src={icon}
          alt='Icon'
          className={css.button_icon}
        />
      )}
    </button>
  );
};
