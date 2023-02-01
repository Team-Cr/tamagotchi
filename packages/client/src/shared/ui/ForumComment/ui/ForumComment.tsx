import { useAppSelector } from '@/shared/lib/redux';
import classNames from 'classnames';
import { ForumUserInfo } from '../../ForumUserInfo';
import css from './ForumComment.module.scss';

export interface ForumCommentProps {
  id: number;
  senderImgSrc: string;
  senderName: string;
  text: string;
  date: string;
}

export const ForumComment = (props: ForumCommentProps) => {
  const user = useAppSelector((state) => state.user);
  const { id, senderImgSrc, senderName, text, date } = props;

  return (
    <div className={classNames(css.comment, { [css.own]: id === user.id })}>
      <div className={css.comment__header}>
        <ForumUserInfo avatarUrl={senderImgSrc} name={senderName} />
      </div>
      <span className={css.comment__body}>{text}</span>
      <time className={css.comment__footer}>{date}</time>
    </div>
  );
};
