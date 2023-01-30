import React, { ReactNode, useEffect, useState } from 'react';
import { Suspense } from 'react';

type Props = {
  fallback?: ReactNode;
  children: ReactNode;
};

export const SuspenseHelper: React.FC<Props> = ({ fallback, children }) => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
    }
  }, [isMounted]);

  return <Suspense fallback={fallback}>{!isMounted ? fallback : children}</Suspense>;
};
