import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    __TEAM_NAME__: JSON.stringify(process.env.TEAM_NAME),
    __BASE_URL__: JSON.stringify(process.env.BASE_URL),
    __MODE__: JSON.stringify(process.env.MODE),
  },
  plugins: [react(), tsconfigPaths(), svgr({ exportAsDefault: true })],
});
