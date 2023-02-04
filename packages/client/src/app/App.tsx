/* eslint-disable react-hooks/rules-of-hooks */
import { startServiceWorker } from '@/app/services/startServiceWorker';
import { AuthThunk } from '@/processes/auth';
import { useAppDispatch } from '@/shared/lib/redux';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { useNotifications } from './providers/NotificationsProvider';
import { AppRouter } from './providers/RouterProvider';
import './styles/index.scss';

if (__MODE__ === 'production' && typeof navigator !== 'undefined') {
  startServiceWorker();
}

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const { isEnabled, enableNotifications } = useNotifications();

  const dispatch = useAppDispatch();
  dispatch(AuthThunk.getUser());

  useEffect(() => {
    const toggleFullscreenOnKeyUp = (e: KeyboardEvent) => {
      const isEmittedByInput = !!(e.target as HTMLElement).closest('input, textarea');

      if (e.key === 'f' && !isEmittedByInput) {
        toggleFullscreen();
      }
    };

    document.addEventListener('keyup', toggleFullscreenOnKeyUp);
    return () => document.removeEventListener('keyup', toggleFullscreenOnKeyUp);
  }, [toggleFullscreen]);

  useEffect(() => {
    if (!isEnabled) {
      enableNotifications();
    }
  }, [isEnabled, enableNotifications]);

  return (
    <>
      <ThemeSwitcher />
      <AppRouter />
    </>
  );
};
