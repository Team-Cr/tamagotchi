import { App } from '@/app/App';
import { store } from '@/app/store';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { FullscreenProvider } from './app/providers/FullscreenProvider';
import { NotificationsProvider } from './app/providers/NotificationsProvider';
import { RouterProvider } from './app/providers/RouterProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FullscreenProvider initialIsToggled={false}>
        <NotificationsProvider>
          <RouterProvider>
            <App />
          </RouterProvider>
        </NotificationsProvider>
      </FullscreenProvider>
    </Provider>
  </React.StrictMode>,
);
