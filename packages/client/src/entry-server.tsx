import { appInitialState } from './app/store';

export function render(url: string | Partial<Location>) {
  return `<script> window.__PRELOADED_STATE__=${JSON.stringify(appInitialState)}</script>`;
}
