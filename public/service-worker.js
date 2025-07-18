// self.addEventListener("install", (e) => {
//   self.skipWaiting();
// });

// self.addEventListener("fetch", (e) => {
//   e.respondWith(fetch(e.request));
// });



const CACHE_NAME = "v1";
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/image/icon-192.png',
  '/image/icon-512.png'
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
