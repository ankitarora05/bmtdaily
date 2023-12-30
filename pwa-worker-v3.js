const bmtDailyPWACache = "bmt-daily-site-v";
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

self.addEventListener("fetch", event => {
  async function returnCachedResource() {
    // Open the app's cache.
    const cache = await caches.open(bmtDailyPWACache);
    // Find the response that was pre-cached during the `install` event.
    const cachedResponse = await cache.match(event.request.url);

    if (cachedResponse) {
      // Return the resource.
      return cachedResponse;
    } else {
      // The resource wasn't found in the cache, so fetch it from the network.
      const fetchResponse = await fetch(event.request.url);
      // Put the response in cache.
      cache.put(event.request.url, fetchResponse.clone());
      // And return the response.
      return fetchResponse;
    }
  }
  event.respondWith(returnCachedResource());
});
