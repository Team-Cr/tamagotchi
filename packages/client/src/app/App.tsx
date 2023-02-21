/* eslint-disable react-hooks/rules-of-hooks */
import { startServiceWorker } from '@/app/services/startServiceWorker';
import { setData } from '@/entities/tamagotchi';
import { AuthThunk } from '@/processes/auth';
import { CharacterAPI } from '@/shared/lib/api/character';
import { useAppDispatch } from '@/shared/lib/redux';
import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { useNotifications } from './providers/NotificationsProvider';
import { AppRouter } from './providers/RouterProvider';
import './styles/index.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { BackgroundAudioSwitcher } from '@/shared/ui/BackgroundAudioSwitcher';
import { ConfigurationThunk } from '@/entities/configuration';

if (typeof navigator !== 'undefined' && __MODE__ === 'production') {
  startServiceWorker();
}

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const { isEnabled, enableNotifications } = useNotifications();

  const dispatch = useAppDispatch();

  dispatch(AuthThunk.getUser()).then(({ payload }) => {
    // @ts-ignore
    const userId = payload?.id;
    dispatch(ConfigurationThunk.getConfiguration(userId));

    CharacterAPI.storeCharacter(userId).then(({ data }) => {
      dispatch(setData(data.character));
    });
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
      <AppRouter />
      <ThemeSwitcher />
      <BackgroundAudioSwitcher />
    </>
  );
};
