import classNames from 'classnames';
import css from './Link.module.scss';

interface LinkProps {
  href: string;
  label: string;
  icon?: string;
  className?: string;
}

const Link = (props: LinkProps) => {
  const { href, label, icon, className = '' } = props;
  return (
    <div className={classNames(css.link__container, className)}>
      <a
        className={css.link}
        href={href}
      >
        <span>{label}</span>
        {icon && (
          <img
            className={css.link__icon}
            src={icon}
            alt='Icon'
          />
        )}
      </a>
    </div>
  );
};

export { Link };
