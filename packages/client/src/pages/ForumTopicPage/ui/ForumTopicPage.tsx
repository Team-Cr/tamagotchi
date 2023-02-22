import EmojiToggle from '@/shared/assets/images/EmojiToggle.png';
import { Comment, ForumAPI } from '@/shared/lib/api';
import { useAppSelector } from '@/shared/lib/redux';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { Button } from '@/shared/ui/Button';
import { ForumComment } from '@/shared/ui/ForumComment';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { Input } from '@/shared/ui/Input';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './ForumTopicPage.module.scss';

const ForumTopicPage = () => {
  const { state } = useLocation();
  const user = useAppSelector((state) => state.user);

  const [emoji, toggleEmoji] = useState(false);
  const [message, setMessage] = useState('');
  const [replyId, setReplyId] = useState<Comment['id']>();
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = useCallback(() => {
    ForumAPI.getComments(state.topicId)
      .then((res) => {
        const data = res.data;
        setComments(data);
      })
      .catch((e) => console.log({ e }));
  }, [state]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  const onToggleEmoji = useCallback(() => {
    toggleEmoji(!emoji);
  }, [emoji]);

  const changeMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  }, []);

  const toggleReply = useCallback(
    (commentId: number) => {
      if (commentId === replyId) {
        setReplyId(undefined);
      } else {
        setReplyId(commentId);
      }
    },
    [replyId],
  );

  const sendMessage = useCallback(() => {
    const text = message.trim();

    if (text === '') return;

    const comment = {
      text,
      userId: user.id,
      commentId: replyId,
    };

    ForumAPI.createComment(state.topicId, comment)
      .then((r) => console.log({ r }))
      .catch((e) => console.log({ e }));

    getComments();

    setReplyId(undefined);
    setMessage('');
  }, [message, user.id, replyId, state.topicId, getComments]);

  const appendEmoji = useCallback(
    (emojiData: EmojiClickData) => {
      setMessage(message + emojiData.emoji);
    },
    [message],
  );

  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.title} />
      <main className={css.topic}>
        <div className={css.topic__comments}>
          {comments.map((comment, index) => (
            <ForumComment key={index} {...comment} onClickReply={toggleReply} />
          ))}
        </div>
        <div className={css.input_area}>
          <span className={css.input_area__reply}>{replyId && `Reply to #${replyId}:`}</span>
          <div className={css.input_area__text}>
            <div className={css.input_area__text__emoji}>
              {emoji && (
                <EmojiPicker
                  onEmojiClick={appendEmoji}
                  width={'100%'}
                  height={'100%'}
                  skinTonesDisabled
                  searchDisabled
                  autoFocusSearch={false}
                  previewConfig={{ showPreview: false }}
                  lazyLoadEmojis
                />
              )}
            </div>
            <Input
              name='text'
              placeholder='Start typing...'
              onChange={changeMessage}
              value={message}
            />
            <button className={css.input_area__text__button} onClick={onToggleEmoji}>
              <img
                className={css.input_area__text__toggle_emoji}
                src={EmojiToggle}
                alt='Toggle emoji'
                height={64}
                width={64}
              />
            </button>
            <Button size='large' onClick={sendMessage}>
              Send
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicPage;
