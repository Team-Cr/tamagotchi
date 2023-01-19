import { addPoints } from '@/entities/tamagotchi';
import CatPicture from '@/shared/assets/images/mainCat.png';
import { useAppDispatch } from '@/shared/lib/redux';
import { ActionsConfig } from '../config/actionsConfig';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import css from './MainContainer.module.scss';

export const MainContainer = () => {
  const dispatch = useAppDispatch();

  const handleUpdateBarsPoints: ActionBlockProps['handleUpdateBarsPoints'] = (points) => {
    dispatch(addPoints(points));
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
