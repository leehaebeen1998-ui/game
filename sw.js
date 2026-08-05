self.addEventListener("install",event=>{
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(self.clients.claim());
});

// GitHub Pages is the source of truth. Always request the current deployed file
// instead of keeping an older HTML/JavaScript pair in an offline cache.
self.addEventListener("fetch",event=>{
  if(event.request.method==="GET")event.respondWith(fetch(event.request));
});

