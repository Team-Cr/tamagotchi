import MessageSrc from '@/shared/assets/images/comment.png';
import { Link } from '@/shared/ui/Link';
import { ForumUserInfo, ForumUserInfoProps } from '../../ForumUserInfo';

import css from './ForumEntry.module.scss';

interface ForumEntryProps {
  title: string;
  topicsNum?: number;
  commentsNum?: number;
  author: ForumUserInfoProps;
  id: string;
  state?: Record<string, unknown>;
}

export const ForumEntry = (props: ForumEntryProps) => {
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
        <ForumUserInfo {...author} />
      </div>
    </div>
  );
};
