import { App } from '@/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { FullscreenProvider } from './app/providers/FullscreenProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FullscreenProvider initialIsToggled={false}>
      <App />
    </FullscreenProvider>
  </React.StrictMode>,
);
