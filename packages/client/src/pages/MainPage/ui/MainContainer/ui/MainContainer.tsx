import CatPicture from '@/shared/assets/images/mainCat.png';
import { Dispatch, SetStateAction } from 'react';
import { BarsPointsType, HandleUpdateBarsPointsType } from '../../../types';
import { ActionsConfig } from '../config/actionsConfig';
import { ActionBlock } from './ActionBlock';
import css from './MainContainer.module.scss';

interface MainContainerProps {
  barsPoints: BarsPointsType;
  setBarsPoints: Dispatch<SetStateAction<BarsPointsType>>;
  setCurrentLevel: Dispatch<SetStateAction<number>>;
}

export const MainContainer = (props: MainContainerProps) => {
  const { barsPoints, setBarsPoints, setCurrentLevel } = props;

  const handleUpdateBarsPoints: HandleUpdateBarsPointsType = ({ level, hp }) => {
    const levelForUpdate =
      barsPoints.level + level > 100 ? barsPoints.level + level - 100 : barsPoints.level + level;
    const hpForUpdate =
      barsPoints.hp + hp > 100 ? 100 : barsPoints.hp + hp < 0 ? 0 : barsPoints.hp + hp;
    if (barsPoints.level + level > 100) {
      setCurrentLevel((prev: number) => prev + 1);
    }
    setBarsPoints(() => ({
      level: levelForUpdate,
      hp: hpForUpdate,
    }));
  };

  return (
    <div className={css.main__container}>
      <img className={css.main__container__image} src={CatPicture} alt='Cat' />
      <div className={css.main__container__actions}>
        {ActionsConfig.map((item) => (
          <ActionBlock
            image={item.image}
            text={item.text}
            key={item.text}
            handleUpdateBarsPoints={handleUpdateBarsPoints}
            pointsForAction={item.pointsForAction}
            keyboardKey={item.keyboardKey}
          />
        ))}
      </div>
    </div>
  );
};
