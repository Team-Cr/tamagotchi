import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

dotenv.config();

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
    __TEAM_NAME__: JSON.stringify(process.env.TEAM_NAME),
    __BASE_URL__: JSON.stringify(process.env.BASE_URL),
    __APP_URL__: JSON.stringify(process.env.APP_URL),
    __MODE__: JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        dir: 'dist/client',
      },
    },
  },
  plugins: [react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
