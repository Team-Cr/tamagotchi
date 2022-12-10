import { useState } from 'react';
import { MainContainer } from './MainContainer';
import { MainFooter } from './MainFooter';
import { MainHeader } from './MainHeader';

import css from './MainPage.module.scss';

export const MainPage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [barsPoints, setBarsPoints] = useState({ level: 50, hp: 90 });

  return (
    <main className={css.main}>
      <MainHeader barsPoints={barsPoints} currentLevel={currentLevel} />
      <MainContainer
        barsPoints={barsPoints}
        setBarsPoints={setBarsPoints}
        setCurrentLevel={setCurrentLevel}
      />
      <MainFooter />
    </main>
  );
};
