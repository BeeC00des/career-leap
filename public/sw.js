// Service Worker for PWA support (safer caching to avoid stale bundles)
const CACHE_NAME = 'careerleap-v3';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// Network-first for dynamic assets, cache-first for pre-cached
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never cache vite/dev/module chunks to prevent stale React/radix bundles
  const isDevAsset = url.pathname.includes('/node_modules/') || url.pathname.includes('/.vite/') || url.pathname.includes('/@vite');
  if (isDevAsset) return; // let the network handle it

  // HTML navigation: network-first, fallback to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const respClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
        return response;
      })
      .catch(() => caches.match(request))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.map((name) => (name === CACHE_NAME ? undefined : caches.delete(name)))
      )
    )
  );
  self.clients.claim();
});
