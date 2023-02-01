import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import path from 'path';
import type { ViteDevServer } from 'vite';
import { createServer as createViteServer } from 'vite';
import { dbConnect } from './database/connect';
import { ApiRouter } from './api';
import bodyParser from 'body-parser';

dotenv.config();

const port = Number(process.env.SERVER_PORT) || 3001;

const distPath = path.dirname(require.resolve('client/dist/client/index.html'));
const srcPath = path.resolve(require.resolve('client'), '../../');
const ssrClientPath = require.resolve('client/dist/ssr/entry-server.cjs');

async function startServer(isDev = process.env.NODE_ENV === 'development') {
  const app = express();
  app.use(cors());
  app.disable('x-powered-by').enable('trust proxy').use(bodyParser.json());

  await dbConnect();

  let vite: ViteDevServer | undefined;

  if (isDev) {
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
      },
      root: path.resolve(srcPath),
      configFile: path.resolve(srcPath, 'vite.config.ts'),
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  app.use('/api', ApiRouter);
  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)');
  });

  if (!isDev) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: () => Promise<string>;

      if (isDev) {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        template = await vite!.transformIndexHtml(url, template);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'src/entry-server.tsx'))).render;
      } else {
        template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8');
        render = (await import(ssrClientPath)).render;
      }

      const appHtml = await render();
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
