import { ArrowBack } from '@/shared/ui/ArrowBack';
import { ForumComment, ForumCommentProps } from '@/shared/ui/ForumComment';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { useLocation } from 'react-router-dom';
import css from './ForumTopicPage.module.scss';

const testData: ForumCommentProps[] = [
  {
    id: 184441,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
  {
    id: 184442,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
  {
    id: 184441,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
  {
    id: 184441,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
  {
    id: 184442,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
  {
    id: 184442,
    senderName: 'Elka',
    senderImgSrc: '',
    text: 'Omg omg omg omg omg omg omg omg omg omg omg omg omg',
    date: '20.02.20 20:20',
  },
];

const ForumTopicPage = () => {
  const { state } = useLocation();
  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.topicTitle} />
      <div className={css.topic_comments}>
        {testData.map((comment, index) => (
          <ForumComment key={index} {...comment} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicPage;
