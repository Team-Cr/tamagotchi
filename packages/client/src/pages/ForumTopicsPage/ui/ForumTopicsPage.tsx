import { ArrowBack } from '@/shared/ui/ArrowBack';
import { ForumEntry } from '@/shared/ui/ForumEntry';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { useLocation } from 'react-router-dom';
import css from './ForumTopicsPage.module.scss';

const testData = [
  {
    title: 'Leveling topic',
    commentsNum: 25,
    author: {
      name: 'Elka',
      avatarUrl: '',
      date: '28 Aug 2021',
    },
    id: '1',
  },
  {
    title: 'Amazing leveling topic',
    commentsNum: 5,
    author: {
      name: 'Barsik',
      avatarUrl: '',
      date: '2 Dec 2021',
    },
    id: '2',
  },
];

const ForumTopicsPage = () => {
  const { state } = useLocation();
  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.forumTitle || ''} />
      <div className={css.topic_entries}>
        {testData.map((data, index) => (
          <ForumEntry key={index} {...data} state={{ topicTitle: data.title }} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicsPage;
