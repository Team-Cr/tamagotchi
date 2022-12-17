import { MainContainer } from './MainContainer';
import { MainFooter } from './MainFooter';
import { MainHeader } from './MainHeader';

import css from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <main className={css.main}>
      <MainHeader />
      <MainContainer />
      <MainFooter />
    </main>
  );
};
