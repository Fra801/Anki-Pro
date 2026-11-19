const C = "anki-pro-v76";
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(["./", "index.html", "manifest.webmanifest", "icon.svg", "mazos/viedma.js", "mazos/promociones.js", "mazos/rnsa.js", "mazos/ley5184.js", "mazos/historia_argentina.js", "mazos/contable.js", "mazos/ifrs_cap01.js", "mazos/ifrs_cap02.js", "mazos/ifrs_cap03.js", "mazos/ifrs_cap04.js", "mazos/ifrs_cap05.js", "mazos/ifrs_cap06.js", "mazos/ifrs_cap07.js", "mazos/ifrs_cap08.js", "mazos/ifrs_cap09.js", "mazos/ifrs_cap10.js", "mazos/ifrs_cap11.js", "mazos/ifrs_cap12.js", "mazos/ifrs_cap13.js", "mazos/ifrs_cap14.js", "mazos/ifrs_apE.js", "mazos/ifrs_apF.js", "mazos/ifrs_apG.js", "mazos/ifrs_apH.js", "mazos/ifrs_apI.js", "estilos/contable.css", "estilos/admin.css", "mazos/admin.js", "mazos/robbins_cap01.js", "mazos/robbins_modH.js", "mazos/robbins_cap02.js", "mazos/robbins_cap03.js", "mazos/robbins_cap04.js", "mazos/robbins_cap05.js", "mazos/robbins_cap06.js", "mazos/robbins_cap07.js", "mazos/robbins_cap08.js", "mazos/robbins_cap09.js", "mazos/robbins_cap10.js", "mazos/robbins_cap11.js", "mazos/robbins_cap12.js", "mazos/robbins_cap13.js", "mazos/robbins_cap14.js", "mazos/robbins_cap15.js", "mazos/robbins_cap16.js", "mazos/robbins_cap17.js", "mazos/robbins_cap18.js", "mazos/robbins_modT.js", "mazos/robbins_modO.js", "mazos/balistica_cap01.js", "mazos/balistica_cap02.js", "mazos/balistica_cap03.js", "mazos/balistica_cap04.js", "mazos/balistica_cap05.js", "mazos/balistica_cap06.js", "mazos/balistica_cap07.js", "mazos/balistica_cap08.js", "mazos/balistica_cap09.js", "mazos/balistica_cap10.js", "mazos/balistica_cap11.js", "mazos/balistica_capS.js", "mazos/balistica_cap12.js", "mazos/balistica_cap13.js", "mazos/balistica_cap14.js", "mazos/balistica_cap15.js", "mazos/balistica_cap16.js"])).catch(() => {}));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r)));
});
