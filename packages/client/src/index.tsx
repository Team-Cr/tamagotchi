import { App } from '@/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { FullscreenProvider } from './app/providers/FullscreenProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <FullscreenProvider initialIsToggled={false}>
        <App />
      </FullscreenProvider>
    </Router>
  </React.StrictMode>,
);
