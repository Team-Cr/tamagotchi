import { useEffect } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import { startServiceWorker } from './services/startServiceWorker';
import './styles/index.scss';

startServiceWorker();

export const App = () => {
  const { toggleFullscreen } = useFullscreen();

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
