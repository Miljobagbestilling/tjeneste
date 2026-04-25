self.addEventListener('install', (e) => {
  console.log('Miljøbag Service Worker installert');
});

self.addEventListener('fetch', (e) => {
  // Lar forespørsler gå gjennom som normalt
});