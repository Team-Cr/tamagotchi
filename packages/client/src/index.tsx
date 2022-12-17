import { App } from '@/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from '@/app/store';
import { FullscreenProvider } from './app/providers/FullscreenProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FullscreenProvider initialIsToggled={false}>
        <App />
      </FullscreenProvider>
    </Provider>
  </React.StrictMode>,
);
