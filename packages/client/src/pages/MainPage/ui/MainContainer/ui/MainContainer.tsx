import { addPoints } from '@/entities/tamagotchi';
import { LeaderboardAPI } from '@/shared/lib/api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { useEffect } from 'react';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import css from './MainContainer.module.scss';

import { GetActionsConfig } from '../config/actionsConfig';
import { AnimationSleepCat } from '@/widgets/AnimationSleepCat';

export const MainContainer = () => {
  const dispatch = useAppDispatch();
  const catRef = useAppSelector((state) => state.animationRef.ref);
  const ActionConfig = GetActionsConfig(catRef);

  const { level } = useAppSelector((state) => state.tamagotchi);

  const { id, first_name, display_name, avatar } = useAppSelector((state) => state.user);

  const handleUpdateBarsPoints: ActionBlockProps['handleUpdateBarsPoints'] = (points) => {
    dispatch(addPoints(points));
  };

  useEffect(() => {
    LeaderboardAPI.addUser({
      data: {
        id: id,
        avatarUrl: avatar ?? '',
        name: display_name ?? first_name,
        daysActive: 0,
        level: level,
      },
      ratingFieldName: 'level',
    });
  }, [avatar, display_name, first_name, id, level]);

  return (
    <div className={css.main__container}>
      <div className={css.main__container__image}>
        <AnimationSleepCat />
      </div>

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
