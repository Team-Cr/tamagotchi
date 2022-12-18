import { App } from '@/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { FullscreenProvider } from './app/providers/FullscreenProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from './app/providers/RouterProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <FullscreenProvider initialIsToggled={false}>
          <RouterProvider>
            <App />
          </RouterProvider>
        </FullscreenProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
);
