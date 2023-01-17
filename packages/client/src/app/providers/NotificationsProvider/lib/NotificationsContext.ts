import { createContext } from 'react';

export interface NotificationsContextProps {
  isEnabled?: boolean;
  setIsEnabled?: (isEnabled: boolean) => void;
}

export const NotificationsContext = createContext<NotificationsContextProps>({});

export const LOCALSTORAGE_NOTIFICATIONS_GRANTED_KEY = 'notifications-granted';

export const LOCALSTORAGE_NOTIFICATIONS_KEY = 'tamagotchi-notifications';
