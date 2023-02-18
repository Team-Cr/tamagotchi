import { App } from '@/app/App';
import { store } from '@/app/store';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { FullscreenProvider } from './app/providers/FullscreenProvider';
import { RouterProvider } from './app/providers/RouterProvider';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <FullscreenProvider initialIsToggled={false}>
        <RouterProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </RouterProvider>
      </FullscreenProvider>
    </Provider>
  </React.StrictMode>,
);
