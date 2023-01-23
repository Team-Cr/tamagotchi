import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    __TEAM_NAME__: JSON.stringify(process.env.TEAM_NAME),
    __BASE_URL__: JSON.stringify(process.env.BASE_URL),
    __MODE__: JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    ssr: true,
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, './src/entry-server.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './src/index.html'),
      },
      output: {
        dir: 'dist/ssr',
      },
    },
  },
  ssr: {
    format: 'cjs',
  },
  plugins: [react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
