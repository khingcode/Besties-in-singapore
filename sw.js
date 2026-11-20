const V = "triptab-v2";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "firebase-config.js",
  "vendor/firebase-app-compat.js", "vendor/firebase-auth-compat.js", "vendor/firebase-firestore-compat.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const host = new URL(req.url).hostname;
  const same = new URL(req.url).origin === location.origin;
  // Only handle this site's files and Google Fonts. Sync traffic must never be cached.
  if (!same && host !== "fonts.googleapis.com" && host !== "fonts.gstatic.com") return;
  if (same) {
    // Network first so updates arrive; fall back to the saved copy when offline.
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(V).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  } else {
    // Fonts and other outside files: use the saved copy, refresh in the background.
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(V).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
