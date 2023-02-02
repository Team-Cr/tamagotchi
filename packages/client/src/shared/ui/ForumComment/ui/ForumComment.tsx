import MessageSrc from '@/shared/assets/images/comment.png';
import { useAppSelector } from '@/shared/lib/redux';
import classNames from 'classnames';
import { Button } from '../../Button';
import { ForumUserInfo } from '../../ForumUserInfo';
import css from './ForumComment.module.scss';

export interface ForumCommentProps {
  id: number;
  userId: number;
  commentId: number;
  text: string;
  date: string;
}

export const ForumComment = (props: ForumCommentProps) => {
  const user = useAppSelector((state) => state.user);
  const { id, userId, commentId, text, date } = props;
  const isOwnComment = id === user.id;

  return (
    <div className={classNames(css.comment, { [css.own]: isOwnComment })}>
      <div className={css.comment__header}>
        <ForumUserInfo avatarUrl={''} name={''} />
        {!isOwnComment && (
          <Button color='transparent' className={css.comment__reply}>
            <img src={MessageSrc} alt='' className={css.comment__icon} />
          </Button>
        )}
      </div>
      <span className={css.comment__body}>{text}</span>
      <time className={css.comment__footer}>{date}</time>
    </div>
  );
};
