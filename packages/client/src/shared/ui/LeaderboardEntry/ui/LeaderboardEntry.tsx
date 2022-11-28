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
    <div className={`${css.entry} ${checked ? css.checked : ''}`}>
      <div className={css.left_group}>
        <div className={css.avatar}></div>
        <span>{name}</span>
      </div>

      <div className={css.right_group}>
        <span className={css.daysActive}>Active: {daysActive} days</span>
        <div className={css.level}>{level}</div>
      </div>
    </div>
  );
};
