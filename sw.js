// Necessário para o Android oferecer "Instalar app". Não guarda nada: tudo vem da internet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { });
