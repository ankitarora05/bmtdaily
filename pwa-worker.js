const bmtDailyPWACache = "bmt-daily-site-v3";
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

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(bmtDailyPWACache).then(cache => {
      cache.addAll(assets)
    })
  )
})
