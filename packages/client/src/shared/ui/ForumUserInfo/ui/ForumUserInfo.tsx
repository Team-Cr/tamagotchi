import { Avatar } from '@/shared/ui/Avatar';
import classNames from 'classnames';
import css from './ForumUserInfo.module.scss';

export interface ForumUserInfoProps {
  name: string;
  date?: string;
  avatarUrl: string;
  className?: string;
}

export const ForumUserInfo = (props: ForumUserInfoProps) => {
  const { name, date, avatarUrl, className } = props;

  return (
    <div className={classNames(css.userinfo, className)}>
      <Avatar src={avatarUrl} className={css.userinfo__avatar} />
      <div className={css.userinfo__group}>
        <span>{name}</span>
        {date && <time>{date}</time>}
      </div>
    </div>
  );
};
