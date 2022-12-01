import { App } from '@/app/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { assets } from './shared/assets';
import { Cat } from './shared/lib/game/cat';
import { Resources } from './shared/lib/game/resources';

const root = createRoot(document.getElementById('root') as HTMLElement);

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

const resources = new Resources();
resources.onReady(renderApp);
resources.load([assets.SleepCatAsset, assets.SleepCatBlackAsset]);
export const cat = new Cat(resources);
