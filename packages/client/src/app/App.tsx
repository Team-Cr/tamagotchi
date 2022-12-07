import { useCallback } from 'react';
import { useFullscreen } from './providers/FullscreenProvider';
import './styles/index.scss';

export const App = () => {
  const { toggleFullscreen } = useFullscreen();

  const toggleFS = useCallback(() => {
    toggleFullscreen();
  }, [toggleFullscreen]);

  return (
    <>
      <button onClick={toggleFS}>Toggle fullscreen</button>
    </>
  );
};
