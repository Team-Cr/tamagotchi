import { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY,
  LOCALSTORAGE_NOTIFICATIONS_KEY,
  NotificationsContext,
  NotificationsContextProps,
} from '../lib/NotificationsContext';

const checkNotificationsEnabled = () => {
  if ('Notification' in window) {
    return (
      Notification.permission === 'granted' &&
      localStorage.getItem(LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY) === 'on'
    );
  }
  return false;
};

const clearNotificationData = () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(LOCALSTORAGE_NOTIFICATIONS_KEY)) {
      localStorage.removeItem(key);
    }
  });
};

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = (props: NotificationsProviderProps) => {
  const { children } = props;
  const [isEnabled, setIsEnabled] = useState<boolean>(() => checkNotificationsEnabled());

  const defaultProps = useMemo<NotificationsContextProps>(
    () => ({
      isEnabled,
      setIsEnabled,
    }),
    [isEnabled],
  );

  useEffect(() => {
    clearNotificationData();
  }, []);

  return (
    <NotificationsContext.Provider value={defaultProps}>{children}</NotificationsContext.Provider>
  );
};
