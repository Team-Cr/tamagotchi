/// <reference lib="WebWorker" />

export type {};
declare const self: ServiceWorkerGlobalScope;

const URLS = ['/', 'index.html', 'offline.html'];

const CACHE_NAME = 'tamagochi';

self.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(URLS);
});

self.addEventListener('activate', () => {
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  event.respondWith(cacheData(request) as Promise<Response>);
});

async function cacheData(request: Request) {
  const cashedRequest = await caches.match(request);
  if (
    URLS.some((searchString) => request.url.indexOf(searchString) >= 0) ||
    request.headers.get('accept')?.includes('text/html')
  ) {
    return cashedRequest || (await caches.match('/offline')) || networkFirst(request);
  }
  return cashedRequest || networkFirst(request);
}

async function networkFirst(request: Request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
}
