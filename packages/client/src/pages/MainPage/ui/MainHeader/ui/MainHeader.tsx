import { LevelOrHpBar } from '@/shared/ui/LevelOrHpBar';
// import { BarsPointsType } from '../../../types';
import css from './MainHeader.module.scss';
import { useAppSelector } from '@/shared/lib/redux';

export const MainHeader = () => {
  const tamagotchi = useAppSelector((state) => state.tamagotchi);

  return (
    <header className={css.main__header}>
      <LevelOrHpBar theme='level' label={tamagotchi.level} state={tamagotchi.expCurrent} maxState={tamagotchi.expMax} />
      <h1 className={css.main__header__title}>OSKAR</h1>
      <LevelOrHpBar theme='hp' label='HP' state={tamagotchi.hpCurrent} maxState={tamagotchi.hpMax} />
    </header>
  );
};
