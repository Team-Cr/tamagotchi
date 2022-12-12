import CatPicture from '@/shared/assets/images/mainCat.png';
import { Dispatch, SetStateAction } from 'react';
import { ActionsConfig } from '../config/actionsConfig';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import css from './MainContainer.module.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { addPoints } from '@/entities/tamagotchi/model';

interface MainContainerProps {
  barsPoints: BarsPointsType;
  setBarsPoints: Dispatch<SetStateAction<BarsPointsType>>;
  setCurrentLevel: Dispatch<SetStateAction<number>>;
}

export const MainContainer = () => {
  const dispatch = useAppDispatch();

  const handleUpdateBarsPoints: ActionBlockProps['handleUpdateBarsPoints'] = (points) => {
    console.log(points);
    dispatch(addPoints(points))
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
