const TARGET='https://quecomerhoy.github.io/central-que-comer/que-comer-principal-negocio.html';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.map(k=>caches.delete(k)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of clients){try{await client.navigate(TARGET)}catch(e){}}
    try{await self.registration.unregister()}catch(e){}
  })());
});
