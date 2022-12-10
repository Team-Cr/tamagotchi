import { useContext } from 'react';
import { FullscreenContext } from './FullscreenContext';

export const useFullscreen = () => {
  const { isToggled, setIsToggled } = useContext(FullscreenContext);

  const toggleFullscreen = () => {
    if (!setIsToggled) {
      return;
    }

    setIsToggled(!isToggled);

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return { isFullscreenToggled: isToggled, toggleFullscreen };
};
