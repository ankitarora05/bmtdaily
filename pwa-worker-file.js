const bmtDailyPWACache = "bmt-daily-site-v6";
const assets = [
  "/",
  "/index.html",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(bmtDailyPWACache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function () {
      // Try the cache
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      try {
        // Fall back to network
        return await fetch(event.request);
      } catch (err) {
        // If both fail, show a generic fallback:
        return caches.match('/offline.html');
        // However, in reality you'd have many different
        // fallbacks, depending on URL & headers.
        // Eg, a fallback silhouette image for avatars.
      }
    })(),
  );
});
