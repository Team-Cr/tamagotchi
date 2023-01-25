import { App } from '@/app/App';
import ReactDOMServer from 'react-dom/server';
import { appInitialState } from './app/store';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { StaticRouter } from 'react-router-dom/server';

export function render(url: string | Partial<Location>) {
  const html =
    ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>,
    ) +
    `
<script> window.__PRELOADED_STATE__=${JSON.stringify(appInitialState)}</script>
`;

  return html;
}
