import { Avatar } from '@/shared/ui/Avatar';
import css from './ForumUserInfo.module.scss';

export interface ForumUserInfoProps {
  name: string;
  date?: string;
  avatarUrl: string;
}

export const ForumUserInfo = (props: ForumUserInfoProps) => {
  const { name, date, avatarUrl } = props;

  return (
    <div className={css.userinfo}>
      <Avatar src={avatarUrl} className={css.userinfo__avatar} />
      <div className={css.userinfo__group}>
        <span>{name}</span>
        {date && <span>{date}</span>}
      </div>
    </div>
  );
};
