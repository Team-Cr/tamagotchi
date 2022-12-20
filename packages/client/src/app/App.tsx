import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { startServiceWorker } from './services/startServiceWorker';
import './styles/index.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { AuthThunk } from '@/processes/auth';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { MainPage } from '@/pages/MainPage';
import { playBackgroundMusic } from '@/entities/sounds';

startServiceWorker();

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const dispatch = useAppDispatch();
  const { isBackgroundMusicPlaying } = useAppSelector((state) => state.sounds);
  dispatch(AuthThunk.getUser());

  useEffect(() => {
    const toggleFullscreenOnKeyUp = (e: KeyboardEvent) => {
      const isEmittedByInput = !!(e.target as HTMLElement).closest('input, textarea');

      if (e.key === 'f' && !isEmittedByInput) {
        toggleFullscreen();
      }
    };
    const startBackgroundMusic = () => {
      dispatch(playBackgroundMusic());
    };

    window.addEventListener('mousemove', () => {
      if (!isBackgroundMusicPlaying) {
        startBackgroundMusic();
      }
    });
    document.addEventListener('keyup', toggleFullscreenOnKeyUp);
    return () => document.removeEventListener('keyup', toggleFullscreenOnKeyUp);
  }, [toggleFullscreen]);

  return (
    <>
      <MainPage />
    </>
  );
};
