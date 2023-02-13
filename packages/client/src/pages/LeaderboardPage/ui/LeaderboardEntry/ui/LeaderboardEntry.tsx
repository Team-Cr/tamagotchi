import { LeaderboardData } from '@/shared/lib/api';
import { Avatar } from '@/shared/ui/Avatar';
import classNames from 'classnames';
import css from './LeaderboardEntry.module.scss';

type LeaderboardEntryProps = Omit<LeaderboardData, 'id'> & { checked: boolean };

export const LeaderboardEntry = (props: LeaderboardEntryProps) => {
  const { avatarUrl, name, daysActive, level, checked } = props;

  if (typeof level !== 'number') {
    return null;
  }

  return (
    <div className={classNames(css.entry, { [css.checked]: checked })}>
      <div className={css.entry__left_group}>
        <Avatar src={avatarUrl} className={css.entry__avatar} />
        <span>{name}</span>
      </div>

      <div className={css.entry__right_group}>
        <span className={css.entry__daysActive}>Active: {daysActive} days</span>
        <div className={css.entry__level}>{level}</div>
      </div>
    </div>
  );
};
