import { EndPage } from '@/pages/EndPage';
import { StartPage } from '@/pages/StartPage';
import { useAppSelector } from '@/shared/lib/redux';
import { TransitionBlock } from '@/widgets/Transitions';
import { MainContainer } from './MainContainer';
import { MainFooter } from './MainFooter';
import { MainHeader } from './MainHeader';

import css from './MainPage.module.scss';

const MainPage = () => {
  const { hpCurrent, hasSeenTutorial } = useAppSelector((state) => state.tamagotchi);

  return (
    <TransitionBlock className={css.main}>
      {!hasSeenTutorial && <StartPage />}
      {hpCurrent <= 0 && <EndPage />}
      <MainHeader />
      <MainContainer />
      <MainFooter />
    </TransitionBlock>
  );
};

export default MainPage;
