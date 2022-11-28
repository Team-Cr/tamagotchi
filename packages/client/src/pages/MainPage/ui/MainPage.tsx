import { useState } from 'react';

import { MainFooter, MainHeader, MainContainer } from '@/widgets';

import './MainPage.scss';

export const MainPage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [barsPoints, setBarsPoints] = useState({ level: 50, hp: 90 });

  return (
    <main className='main'>
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
