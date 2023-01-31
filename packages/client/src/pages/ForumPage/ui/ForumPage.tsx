import { ArrowBack } from '@/shared/ui/ArrowBack';
import { ForumEntry } from '@/shared/ui/ForumEntry';
import { ForumHeader } from '@/shared/ui/ForumHeader';
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
      <ArrowBack />
      <ForumHeader title='Forums' />
      <div className={css.forum_entries}>
        {testData.map((data, index) => (
          <ForumEntry key={index} {...data} state={{ forumTitle: data.title }} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumPage;
