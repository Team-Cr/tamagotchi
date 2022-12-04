import arrowSrc from '@/shared/assets/images/arrow.png';
import { GetLeaderboardProps, LeaderboardAPI, LeaderboardData } from '@/shared/lib/api';
import { LeaderboardEntry } from '@/shared/ui/LeaderboardEntry';
import { useEffect, useState } from 'react';
import css from './LeaderboardPage.module.scss';

const userId = 2;

const LeaderboardConfig: GetLeaderboardProps = {
  cursor: 0,
  limit: 5,
  ratingFieldName: 'level',
};

export const LeaderboardPage = () => {
  const [entries, setEntries] = useState<LeaderboardData[]>([]);

  useEffect(() => {
    LeaderboardAPI.all(LeaderboardConfig)
      .then((res) => {
        const data = res.data.map((entry) => entry.data);
        setEntries(data);
      })
      .catch((e) => console.log({ e }));
  }, [setEntries]);


  return (
    <>
      <a className={css.back} href='/#'>
        <img src={arrowSrc} alt='Назад' />
      </a>
      <div className={css.layout}>
        <header>
          <h1 className={css.layout__title}>Cats leaderboard</h1>
        </header>

        <main className={css.layout__entries}>
          {entries.length !== 0 ? (
            entries.map(({ id, avatarUrl, name, daysActive, level }) => (
              <LeaderboardEntry
                key={id}
                avatarUrl={avatarUrl}
                name={name}
                daysActive={daysActive}
                level={level}
                checked={id === userId}
              />
            ))
          ) : (
            <span>No one is on the leaderboard yet. Be the first!</span>
          )}
        </main>
      </div>
    </>
  );
};
