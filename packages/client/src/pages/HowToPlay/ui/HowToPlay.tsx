import { FC } from 'react';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { DotNavigation } from '@/shared/ui/DotNavigation';

import styles from './HowToPlay.module.scss';

const guideList = [
  {
    title: 'Welcome to Tamagochi',
    img: 'https://user-images.githubusercontent.com/52976585/205504775-6876cb2a-d411-4f07-8adf-e2303e8181ba.png',
  },
  {
    title: 'Leveling',
    img: 'https://user-images.githubusercontent.com/52976585/205504784-64a06a83-0cab-4c5b-9aa4-da9e3a657843.png',
  },
  {
    title: 'Cat life',
    img: 'https://user-images.githubusercontent.com/52976585/205504796-543f6949-43b9-443c-bb70-75dd652b1018.png',
  },
];

export const HowToPlay: FC = () => {
  const options = guideList.map((item) => ({
    ...item,
    id: item.title.replace(/\W/g, '-'),
  }));

  return (
    <div className={styles.landing}>
      <DotNavigation options={options} />
      <ArrowBack backTo={'/login'} />
      {options.map((option) => (
        <img
          className={styles.img}
          id={option.id}
          src={option.img}
          key={option.id}
          alt={option.title}
        />
      ))}
    </div>
  );
};
