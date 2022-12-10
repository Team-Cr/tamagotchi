import classNames from 'classnames';
import { ReactNode } from 'react';
import css from './Link.module.scss';

interface LinkProps {
  href: string;
  children: ReactNode;
  icon?: string;
  className?: string;
}

const Link = (props: LinkProps) => {
  const { href, children, icon, className = '' } = props;
  return (
    <div className={classNames(css.link__container, className)}>
      <a className={css.link} href={href}>
        <span>{children}</span>
        {icon && <img className={css.link__icon} src={icon} alt='Icon' />}
      </a>
    </div>
  );
};

export { Link };
