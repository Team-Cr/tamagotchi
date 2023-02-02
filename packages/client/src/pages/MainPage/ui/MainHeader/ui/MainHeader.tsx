import {
  getHealthNotificationOptions,
  HealthState,
  useNotifications,
} from '@/app/providers/NotificationsProvider';
import { LeaderboardConfig } from '@/pages/LeaderboardPage/ui/LeaderboardPage';
import { LeaderboardAPI, LeaderboardData } from '@/shared/lib/api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { LevelOrHpBar } from '@/shared/ui/LevelOrHpBar';
import { useEffect, useState } from 'react';
import css from './MainHeader.module.scss';
import { addLeaderboardLevel } from '@/entities/tamagotchi';

export const MainHeader = () => {
  const { expMax, expCurrent, hpCurrent, hpMax, level } = useAppSelector(
    (state) => state.tamagotchi,
  );

  const { id } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (level === 1) {
      LeaderboardAPI.all(LeaderboardConfig)
        .then((res) => {
          const data = res.data.map((entry) => entry.data);

          const user = data.find((element) => {
            return element.id === id;
          });

          if (user !== undefined) {
            const lvl = user.level;

            dispatch(addLeaderboardLevel({ level: lvl }));
          }
        })

        .catch((e) => console.log({ e }));
    }
  }, [dispatch, id, level]);

  const { sendNotification } = useNotifications();

  useEffect(() => {
    const hpRatio = hpCurrent / hpMax;
    if (hpRatio === 0) {
      sendNotification({
        title: 'I decided to leave you 😢',
        options: getHealthNotificationOptions(HealthState.HEALTH_0),
      });
    } else if (hpRatio <= 0.25) {
      sendNotification({
        title: 'Health: 25%',
        options: getHealthNotificationOptions(HealthState.HEALTH_25),
      });
    } else if (hpRatio <= 0.5) {
      sendNotification({
        title: 'Health: 50%',
        options: getHealthNotificationOptions(HealthState.HEALTH_50),
      });
    } else if (hpRatio <= 0.75) {
      sendNotification({
        title: 'Health: 75%',
        options: getHealthNotificationOptions(HealthState.HEALTH_75),
      });
    }
  }, [hpCurrent, hpMax, sendNotification]);

  return (
    <header className={css.main__header}>
      <LevelOrHpBar theme='level' label={level} state={expCurrent} maxState={expMax} />
      <h1 className={css.main__header__title}>OSKAR</h1>
      <LevelOrHpBar theme='hp' label='HP' state={hpCurrent} maxState={hpMax} />
    </header>
  );
};
