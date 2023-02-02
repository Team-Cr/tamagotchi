import { addPoints } from '@/entities/tamagotchi';
import CatPicture from '@/shared/assets/images/mainCat.png';
import { useAppDispatch } from '@/shared/lib/redux';
import { ActionsConfig } from '../config/actionsConfig';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import css from './MainContainer.module.scss';

import { GetActionsConfig } from '../config/actionsConfig';
import { AnimationSleepCat } from '@/widgets/AnimationSleepCat';


export const MainContainer = () => {
  const dispatch = useAppDispatch();
  const catRef = useAppSelector((state) => state.animationRef.ref);
  const ActionConfig = GetActionsConfig(catRef);

  const handleUpdateBarsPoints: ActionBlockProps['handleUpdateBarsPoints'] = (points) => {
    dispatch(addPoints(points));
  };

  return (
    <div className={css.main__container}>
      <div className={css.main__container__image}>
        <AnimationSleepCat />
      </div>

      {/* <img className={css.main__container__image} src={CatPicture} alt='Cat' /> */}
      <div className={css.main__container__actions}>
        {ActionConfig.map((item) => (
          <ActionBlock
            image={item.image}
            text={item.text}
            key={item.text}
            action={item.action}
            handleUpdateBarsPoints={handleUpdateBarsPoints}
            pointsForAction={item.pointsForAction}
            keyboardKey={item.keyboardKey}
          />
        ))}
      </div>
    </div>
  );
};
