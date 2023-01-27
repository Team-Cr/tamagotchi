import css from './Header.module.scss';

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return <header className={css.header}>{title}</header>;
};
