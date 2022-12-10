import { createContext } from 'react';

export interface FullscreenContextProps {
  isToggled?: boolean;
  setIsToggled?: (isToggled: boolean) => void;
}

export const FullscreenContext = createContext<FullscreenContextProps>({});
