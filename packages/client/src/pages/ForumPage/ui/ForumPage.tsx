import { Forum, ForumAPI } from '@/shared/lib/api';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { ForumEntry } from '@/shared/ui/ForumEntry';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { useEffect, useState } from 'react';
import css from './ForumPage.module.scss';

const ForumPage = () => {
  const [entries, setEntries] = useState<Forum[]>([]);

  useEffect(() => {
    ForumAPI.getForums()
      .then((res) => {
        const data = res.data;
        setEntries(data);
      })
      .catch((e) => console.log({ e }));
  }, [setEntries]);

  return (
    <>
      <ArrowBack />
      <ForumHeader title='Forums' />
      <div className={css.forum_entries}>
        {entries.map((data: Forum) => {
          const { id, title } = data;
          return <ForumEntry key={id} {...data} state={{ forumId: id, title }} />;
        })}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumPage;
