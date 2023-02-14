import CatPicture from '@/shared/assets/images/mainCat.png';
import { LeaderboardAPI } from '@/shared/lib/api';
import { useAppSelector } from '@/shared/lib/redux';
import { useEffect } from 'react';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import { ActionConfig } from '../config/actionsConfig';
import { useBarsPoints } from '../hooks/useBarsPoints';
import css from './MainContainer.module.scss';

import { GetActionsConfig } from '../config/actionsConfig';
import { AnimationSleepCat } from '@/widgets/AnimationSleepCat';

export const MainContainer = () => {
  const catRef = useAppSelector((state) => state.animationRef.ref);
  const ActionConfig = GetActionsConfig(catRef);

  const { updateBarsPoints: handleUpdateBarsPoints, level } = useBarsPoints();

  const { id, first_name, display_name, avatar } = useAppSelector((state) => state.user);

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
