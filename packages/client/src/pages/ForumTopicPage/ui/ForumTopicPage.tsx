import { ArrowBack } from '@/shared/ui/ArrowBack';
import { Button } from '@/shared/ui/Button';
import { ForumComment, ForumCommentProps } from '@/shared/ui/ForumComment';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { Input } from '@/shared/ui/Input';
import { useLocation } from 'react-router-dom';
import css from './ForumTopicPage.module.scss';

const testData: ForumCommentProps[] = [];

const ForumTopicPage = () => {
  const { state } = useLocation();
  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.topicTitle} />
      <main className={css.topic}>
        <div className={css.topic_comments}>
          {testData.map((comment, index) => (
            <ForumComment key={index} {...comment} />
          ))}
        </div>
        <div className={css.topic_input_area}>
          <Input name='text' placeholder='Start typing...' />
          <Button size='large'>Send</Button>
        </div>
      </main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicPage;
