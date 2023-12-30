const bmtDailyPWACache = "bmt-daily-site-v7";
const assets = [
  "/"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(bmtDailyPWACache).then(cache => {
      cache.addAll(assets);
    })
  );
});
