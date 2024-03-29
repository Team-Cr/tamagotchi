import notificationIcon from '@/shared/assets/images/notifications/icon.png';
import { useContext } from 'react';
import {
  LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY,
  LOCALSTORAGE_NOTIFICATIONS_KEY,
  NotificationsContext,
} from './NotificationsContext';

const APP_TITLE = 'Tamagotchi';

const checkNotificationPromise = () => {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
};

export const useNotifications = () => {
  const { isEnabled, setIsEnabled } = useContext(NotificationsContext);

  const handlePermission = (permission: NotificationPermission) => {
    if (!setIsEnabled) {
      return;
    }

    if (permission === 'granted') {
      localStorage.setItem(LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY, 'on');
      setIsEnabled(true);
    } else if (permission === 'denied') {
      localStorage.setItem(LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY, 'off');
      setIsEnabled(false);
    }
  };

  const enableNotifications = () => {
    if (!('Notification' in window)) {
      return;
    }

    if (checkNotificationPromise()) {
      Notification.requestPermission().then(handlePermission);
    }

    Notification.requestPermission(handlePermission);
  };

  type SendNotificationType = {
    title?: string;
    options?: NotificationOptions;
  };

  const sendNotification = ({ title = '', options = {} }: SendNotificationType) => {
    const { tag, icon = notificationIcon } = options;

    if (tag) {
      const localStorageTag = `${LOCALSTORAGE_NOTIFICATIONS_KEY}_${tag}`;
      const timestamp = new Date().getTime();

      const prevTimestamp = Number(localStorage.getItem(localStorageTag));
      if (!prevTimestamp) {
        localStorage.setItem(localStorageTag, timestamp.toString());
      }

      if ((timestamp - prevTimestamp) / 60 < 60) {
        return;
      }

      const notificationTitle = APP_TITLE + ' | ' + title;
      new Notification(notificationTitle, { icon, ...options });

      localStorage.setItem(localStorageTag, timestamp.toString());
      return;
    }

    new Notification(APP_TITLE, { icon, ...options });
  };

  return { isEnabled, enableNotifications, sendNotification };
};
