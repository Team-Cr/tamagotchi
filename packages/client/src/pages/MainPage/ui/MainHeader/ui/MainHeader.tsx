import { LevelOrHpBar } from '@/shared/ui/LevelOrHpBar';
import css from './MainHeader.module.scss';
import { useAppSelector } from '@/shared/lib/redux';

export const MainHeader = () => {
  const { expMax, expCurrent, hpCurrent, hpMax, level } = useAppSelector(
    (state) => state.tamagotchi,
  );

  return (
    <header className={css.main__header}>
      <LevelOrHpBar theme='level' label={level} state={expCurrent} maxState={expMax} />
      <h1 className={css.main__header__title}>OSKAR</h1>
      <LevelOrHpBar theme='hp' label='HP' state={hpCurrent} maxState={hpMax} />
    </header>
  );
};
