const CACHE='amwali-b727cc607e';
const FILES=["./","./assets/Onboarding-DsrXpRWP.js","./assets/Reports-CDJNC7nY.js","./assets/Settings-CCZBkUC_.js","./assets/ibm-plex-sans-arabic-arabic-400-normal-CyU-ddYS.woff2","./assets/ibm-plex-sans-arabic-arabic-600-normal-0pRdybE_.woff2","./assets/ibm-plex-sans-arabic-latin-400-normal-Bo5KPYvw.woff2","./assets/ibm-plex-sans-arabic-latin-600-normal-KrqB56Mw.woff2","./assets/index-BKKVRMUY.js","./assets/style-D_AfiRSw.css","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./icon-maskable.svg","./icon.svg","./index.html","./manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;const O={ignoreVary:true}; if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  // التنقل بين الصفحات يُخدَّم من الغلاف المخزّن دون شبكة. باقي الملفات: من الكاش أولاً.
  if(r.mode==='navigate'){e.respondWith(caches.match('./index.html',O).then(m=>m||caches.match('./',O)).then(m=>m||fetch(r)));return}
  e.respondWith(caches.match(r,O).then(m=>m||fetch(r)));
});
