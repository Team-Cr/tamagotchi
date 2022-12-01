import { LevelOrHpBar } from '@/shared/ui/LevelOrHpBar';
import './MainHeader.scss';

type MainHeaderProps = {
  barsPoints: BarsPointsType;
  currentLevel: number;
};
export const MainHeader = (props: MainHeaderProps) => {
  const { barsPoints, currentLevel } = props;
  return (
    <header className='main__header'>
      <LevelOrHpBar theme='level' text={currentLevel} stat={barsPoints.level} />
      <h1 className='main__header__title'>OSKAR</h1>
      <LevelOrHpBar theme='hp' text='HP' stat={barsPoints.hp} />
    </header>
  );
};
