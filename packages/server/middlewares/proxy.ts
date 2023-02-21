import type { RequestHandler, Request } from 'express';
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';
import type { ClientRequest } from 'http';

const __BASE_URL__ = process.env.BASE_URL;

const modifyBodyReStreamCb = function (proxyReq: ClientRequest, req: Request) {
  if (req.body) {
    const bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  }
};

export const proxyMiddleware: RequestHandler = (req, res, next) => {
  return createProxyMiddleware({
    target: __BASE_URL__,
    pathRewrite: { '/api/ya': '' }, // удаление лишних символов
    changeOrigin: true,
    cookieDomainRewrite: { 'ya-praktikum.tech': req.hostname },
    selfHandleResponse: true,
    logLevel: 'error',
    onProxyReq: modifyBodyReStreamCb,
    onProxyRes: responseInterceptor(async (responseBuffer, _proxyRes, _req, _res) => {
      return responseBuffer;
    }),
  })(req, res, next);
};
