import classNames from 'classnames';
import css from './LeaderboardEntry.module.scss';

interface LeaderboardEntryProps {
  name: string;
  daysActive: number;
  level: number;
  checked: boolean;
}

export const LeaderboardEntry = (props: LeaderboardEntryProps) => {
  const { name, daysActive, level, checked } = props;

  return (
    <div className={classNames(css.entry, { [css.checked]: checked })}>
      <div className={css.entry__left_group}>
        <div className={css.entry__avatar}></div>
        <span>{name}</span>
      </div>

      <div className={css.entry__right_group}>
        <span className={css.entry__daysActive}>Active: {daysActive} days</span>
        <div className={css.entry__level}>{level}</div>
      </div>
    </div>
  );
};
