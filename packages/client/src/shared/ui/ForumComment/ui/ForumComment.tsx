import { UserAPI } from '@/entities/user';
import MessageSrc from '@/shared/assets/images/comment.png';
import { Comment, User } from '@/shared/lib/api';
import { useAppSelector } from '@/shared/lib/redux';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../../Button';
import { ForumUserInfo } from '../../ForumUserInfo';
import css from './ForumComment.module.scss';

export type ForumCommentProps = Comment & {
  onClickReply: (commentId: number) => void;
};

export const ForumComment = (props: ForumCommentProps) => {
  const user = useAppSelector((state) => state.user);
  const { id, userId, commentId, text, createdAt, onClickReply } = props;
  const isOwnComment = userId === user.id;

  const [author, setAuthor] = useState<User>(user);

  const onClick = useCallback(() => {
    onClickReply(id);
  }, [onClickReply, id]);

  useEffect(() => {
    if (!isOwnComment) {
      UserAPI.getUser(userId)
        .then((res) => {
          setAuthor(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [isOwnComment, user, userId]);

  return (
    <div className={classNames(css.comment, { [css.own]: isOwnComment })}>
      <div className={css.comment__header}>
        <div className={css.comment__header__group}>
          <span className={css.comment__header__id}>#{id}</span>
          <ForumUserInfo
            className={css.comment__header__userinfo}
            avatarUrl={author.avatar || ''}
            name={author.first_name}
          />
          {commentId && <span className={css.comment__header__id}>to #{commentId}</span>}
        </div>

        <Button color='transparent' className={css.comment__reply} onClick={onClick}>
          <img src={MessageSrc} alt='' className={css.comment__icon} />
        </Button>
      </div>
      <span className={css.comment__body}>{text}</span>
      <time className={css.comment__footer} dateTime={createdAt}>
        {new Date(createdAt).toISOString().slice(0, 19).replace('T', ' ')}
      </time>
    </div>
  );
};
