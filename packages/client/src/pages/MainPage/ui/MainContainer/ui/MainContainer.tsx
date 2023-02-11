import { addPoints } from '@/entities/tamagotchi';
import CatPicture from '@/shared/assets/images/mainCat.png';
import { LeaderboardAPI } from '@/shared/lib/api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { useEffect } from 'react';
import { ActionsConfig } from '../config/actionsConfig';
import { ActionBlock, ActionBlockProps } from './ActionBlock';
import css from './MainContainer.module.scss';

export const MainContainer = () => {
  const dispatch = useAppDispatch();

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
        userLevel: level,
      },
      ratingFieldName: 'userLevel',
    });
  }, [avatar, display_name, first_name, id, level]);

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
