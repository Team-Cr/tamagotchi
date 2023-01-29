import { Link } from '@/shared/ui/Link';
import MessageSrc from '../../assets/comment.png';
import { UserInfo, UserInfoProps } from '../UserInfo/UserInfo';
import css from './Entry.module.scss';

interface EntryProps {
  title: string;
  topicsNum?: number;
  commentsNum?: number;
  author: UserInfoProps;
  id: string;
  state?: Record<string, unknown>;
}

export const Entry = (props: EntryProps) => {
  const { title, topicsNum, commentsNum, author, id, state } = props;

  return (
    <div className={css.entry}>
      <div className={css.entry__group}>
        <img src={MessageSrc} alt='' className={css.entry__group__icon} />
        <Link href={id} className={css.entry__group__link} state={state}>
          {title}
        </Link>
      </div>
      <div className={css.entry__group}>
        <ul className={css.entry__group__stats}>
          {topicsNum && <li>{topicsNum} topics</li>}
          {commentsNum && <li>{commentsNum} comments</li>}
        </ul>
        <UserInfo {...author} />
      </div>
    </div>
  );
};
