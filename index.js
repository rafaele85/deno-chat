addEventListener("fetch", (event) => {
  const response = new Response('Hello world 2!', {
      headers: {'content-type': 'text/plain'}
  })

  event.respondWith(response)
})