// Necessário para o Android oferecer "Instalar app". Não guarda nada: tudo vem da internet.
// A página principal é sempre buscada de novo (sem cache), para as atualizações aparecerem na hora.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(function () { return fetch(e.request); }));
  }
});
