import { ReactNode, useMemo, useState } from 'react';
import { FullscreenContext, FullscreenContextProps } from '../lib/FullscreenContext';

interface FullscreenProviderProps {
  initialIsToggled: boolean;
  children: ReactNode;
}

export const FullscreenProvider = (props: FullscreenProviderProps) => {
  const { children, initialIsToggled = false } = props;
  const [isToggled, setIsToggled] = useState<boolean>(initialIsToggled);

  const defaultProps = useMemo<FullscreenContextProps>(
    () => ({
      isToggled,
      setIsToggled,
    }),
    [isToggled],
  );

  return <FullscreenContext.Provider value={defaultProps}>{children}</FullscreenContext.Provider>;
};
