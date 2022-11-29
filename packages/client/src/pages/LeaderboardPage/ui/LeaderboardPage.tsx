import arrowSrc from '@/shared/assets/images/arrow.png';
import { LeaderboardEntry } from '@/shared/ui/LeaderboardEntry';
import css from './LeaderboardPage.module.scss';

const userId = 2;

const mockData = [
  {
    id: 0,
    name: 'Barsik',
    daysActive: 25,
    level: 999,
  },
  {
    id: 1,
    name: 'Elka Elka Elka Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 2,
    name: 'Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 3,
    name: 'Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 4,
    name: 'Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 5,
    name: 'Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 6,
    name: 'Elka',
    daysActive: 21,
    level: 65,
  },
  {
    id: 7,
    name: 'Oskar',
    daysActive: 9,
    level: 23,
  },
  {
    id: 8,
    name: 'Bob',
    daysActive: 1,
    level: 2,
  },
];

export const LeaderboardPage = () => {
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
          {mockData.map(({ id, name, daysActive, level }) => (
            <LeaderboardEntry
              key={id}
              name={name}
              daysActive={daysActive}
              level={level}
              checked={id === userId}
            />
          ))}
        </main>
      </div>
    </>
  );
};
