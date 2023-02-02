import { ArrowBack } from '@/shared/ui/ArrowBack';
import { Button } from '@/shared/ui/Button';
import { ForumComment, ForumCommentProps } from '@/shared/ui/ForumComment';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { Input } from '@/shared/ui/Input';
import EmojiToggle from '@/shared/assets/images/EmojiToggle.png';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useLocation } from 'react-router-dom';
import css from './ForumTopicPage.module.scss';
import { ChangeEvent, useCallback, useState } from 'react';

const testData: ForumCommentProps[] = [];

const ForumTopicPage = () => {
  const { state } = useLocation();

  const [emoji, toggleEmoji] = useState(false);
  const [message, setMessage] = useState('');

  const onToggleEmoji = useCallback(() => {
    toggleEmoji(!emoji);
  }, [emoji]);

  const changeMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  }, []);

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
        <div className={css.topic_comments}>
          {testData.map((comment, index) => (
            <ForumComment key={index} {...comment} />
          ))}
        </div>
        <div className={css.input_area}>
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
          </div>
          <div>
            <Button size='large'>Send</Button>
          </div>
        </div>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicPage;
