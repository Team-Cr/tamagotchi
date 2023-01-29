import { useLocation } from 'react-router-dom';
import { Entry } from '../../shared/ui/Entry/Entry';
import { Header } from '../../shared/ui/Header/Header';
import css from './TopicListPage.module.scss';

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

const TopicListPage = () => {
  const { state } = useLocation();
  return (
    <>
      <Header title={state.forumTitle || ''} />
      <div className={css.topic_entries}>
        {testData.map((data, index) => (
          <Entry key={index} {...data} state={{ topicTitle: data.title }} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default TopicListPage;
