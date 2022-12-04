import styles from './Button.module.scss';
import React from 'react';
import { Colors, ComponentProps, Dimensions } from '@/shared/ui/types'
import { useClassNames } from '@/shared/lib/classname/useClassName'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement>, ComponentProps {
  size?: Dimensions,
  color?: Colors,
  disabled?: boolean
}

export const Button = (props : ButtonProps) => {
  const {
    size = 'medium',
    type = 'button',
    color = 'primary',
    classPrefix = 'button',
    disabled,
    children,
    className,
    ...rest
  } = props;

  const { withClassPrefix, merge } = useClassNames(classPrefix, styles);
  const classes = merge(
    className,
    withClassPrefix(color, size)
  );

  return (
    <button {...rest}
            type={type}
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}>
      {children}
    </button>
  );
}
