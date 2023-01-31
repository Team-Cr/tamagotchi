import css from './ForumHeader.module.scss';

interface ForumHeaderProps {
  title: string;
}

export const ForumHeader = (props: ForumHeaderProps) => {
  const { title } = props;

  return (
    <header className={css.header}>
      <h1>{title}</h1>
    </header>
  );
};
