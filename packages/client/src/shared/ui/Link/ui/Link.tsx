import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import css from './Link.module.scss';

interface LinkProps {
  href: string;
  children?: ReactNode;
  icon?: string;
  className?: string;
  state?: Record<string, unknown>;
}

const Link = (props: LinkProps) => {
  const { href, children, icon, className = '', state = {} } = props;
  return (
    <div className={classNames(css.link__container, className)}>
      <RouterLink className={css.link} to={href} state={state}>
        {children && <span>{children}</span>}
        {icon && <img className={css.link__icon} src={icon} alt='Icon' />}
      </RouterLink>
    </div>
  );
};

export { Link };
