import { startServiceWorker } from './services/startServiceWorker';
import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import './styles/index.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { AuthThunk } from '@/processes/auth';

startServiceWorker();

export const App = () => {
  const { toggleFullscreen } = useFullscreen();

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

  return <></>;
};
