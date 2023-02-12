/* eslint-disable react-hooks/rules-of-hooks */
import { setData } from '@/entities/tamagotchi';
import { AuthThunk } from '@/processes/auth';
import { CharacterAPI } from '@/shared/lib/api/character';
import { useAppDispatch } from '@/shared/lib/redux';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { useNotifications } from './providers/NotificationsProvider';
import { AppRouter } from './providers/RouterProvider';
import { startServiceWorker } from './services/startServiceWorker';
import './styles/index.scss';

if (typeof navigator !== 'undefined' && __MODE__ === 'production') {
  startServiceWorker();
}

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const { isEnabled, enableNotifications } = useNotifications();

  const dispatch = useAppDispatch();
  dispatch(AuthThunk.getUser()).then(async ({ payload }) => {
    // @ts-ignore
    const id = payload?.id as number | undefined;

    if (id) {
      await CharacterAPI.storeCharacter(id).then(({ data }) => {
        dispatch(setData(data.character));
      });
    }
  });

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
