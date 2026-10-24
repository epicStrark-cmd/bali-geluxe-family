const CACHE='bali-geluxe-family-2026-restored-v10';
const SHELL=['./','./index.html','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bali-geluxe-family-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);if(u.origin!==self.location.origin)return;
 // CEO brief is live group coordination; never serve a cached old briefing.
 if(u.pathname.endsWith('/crew-briefing.json')){
   e.respondWith(fetch(r,{cache:'no-store'}));return;
 }
 if(r.mode==='navigate'){
   e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{if(res.ok){const cp=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(r,cp)))}return res}).catch(()=>caches.match(r).then(hit=>hit||caches.match('./index.html'))));return;
 }
 e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(r,cp)))}return res}).catch(()=>caches.match(r)));
});
