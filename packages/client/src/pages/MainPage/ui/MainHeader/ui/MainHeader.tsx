import {
  getHealthNotificationOptions,
  HealthState,
  useNotifications,
} from '@/app/providers/NotificationsProvider';
import { useAppSelector } from '@/shared/lib/redux';
import { LevelOrHpBar } from '@/shared/ui/LevelOrHpBar';
import { useEffect } from 'react';
import css from './MainHeader.module.scss';

export const MainHeader = () => {
  const { expMax, expCurrent, hpCurrent, hpMax, level } = useAppSelector(
    (state) => state.tamagotchi,
  );

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
