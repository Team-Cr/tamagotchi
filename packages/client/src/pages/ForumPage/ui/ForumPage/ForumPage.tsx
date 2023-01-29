import { Entry } from '../../shared/ui/Entry/Entry';
import { Header } from '../../shared/ui/Header/Header';
import css from './ForumPage.module.scss';

const testData = [
  {
    title: 'About leveling & leveling & leveling & leveling & leveling',
    topicsNum: 2,
    commentsNum: 25,
    author: {
      name: 'Elka',
      avatarUrl: '',
      date: '28 Aug 2021',
    },
    id: '1',
  },
  {
    title: 'Amazing leveling',
    topicsNum: 200,
    commentsNum: 5,
    author: {
      name: 'Barsik Barsik Barsik',
      avatarUrl: '',
      date: '2 Dec 2021',
    },
    id: '2',
  },
  // {
  //   title: 'Amazing leveling',
  //   topicsNum: 200,
  //   commentsNum: 5,
  //   author: {
  //     name: 'Barsik Barsik Barsik',
  //     avatarUrl: '',
  //     date: '2 Dec 2021',
  //   },
  //   id: '2',
  // },
  // {
  //   title: 'Amazing leveling',
  //   topicsNum: 200,
  //   commentsNum: 5,
  //   author: {
  //     name: 'Barsik Barsik Barsik',
  //     avatarUrl: '',
  //     date: '2 Dec 2021',
  //   },
  //   id: '2',
  // },
  // {
  //   title: 'Amazing leveling',
  //   topicsNum: 200,
  //   commentsNum: 5,
  //   author: {
  //     name: 'Barsik Barsik Barsik',
  //     avatarUrl: '',
  //     date: '2 Dec 2021',
  //   },
  //   id: '2',
  // },
  // {
  //   title: 'Amazing leveling',
  //   topicsNum: 200,
  //   commentsNum: 5,
  //   author: {
  //     name: 'Barsik Barsik Barsik',
  //     avatarUrl: '',
  //     date: '2 Dec 2021',
  //   },
  //   id: '2',
  // },
];

const ForumPage = () => {
  return (
    <>
      <Header title='Forums' />
      <div className={css.forum_entries}>
        {testData.map((data, index) => (
          <Entry key={index} {...data} state={{ forumTitle: data.title }} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumPage;
