/* eslint-disable react-hooks/rules-of-hooks */
import { AuthThunk } from '@/processes/auth';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import React, { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { useNotifications } from './providers/NotificationsProvider';
import { AppRouter } from './providers/RouterProvider';
import { startServiceWorker } from './services/startServiceWorker';
//import { playBackgroundMusic } from '@/entities/sounds';
import './styles/index.scss';

if (typeof navigator !== 'undefined') {
  startServiceWorker();
}

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const { isEnabled, enableNotifications } = useNotifications();

  const dispatch = useAppDispatch();
  //const { isBackgroundMusicPlaying } = useAppSelector((state) => state.sounds);
  dispatch(AuthThunk.getUser());

  useEffect(() => {
    const toggleFullscreenOnKeyUp = (e: KeyboardEvent) => {
      const isEmittedByInput = !!(e.target as HTMLElement).closest('input, textarea');

      if (e.key === 'f' && !isEmittedByInput) {
        toggleFullscreen();
      }
    };
    /*const startBackgroundMusic = () => {
      dispatch(playBackgroundMusic());
    };

    window.addEventListener('mousemove', () => {
      if (!isBackgroundMusicPlaying) {
        startBackgroundMusic();
      }
    });*/
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
    </>
  );
};
