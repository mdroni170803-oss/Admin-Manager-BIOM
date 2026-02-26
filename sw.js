const cacheName = 'Admin of BIOM';
const cacheAssets = [
  'index.html',
  'style.css',
  'script.js'
];

// Install Event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch Event (Offline support)
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
