self.addEventListener('fetch', function fetcher (event) {
  var request = event.request

  if (request.url.indexOf('giphy.com/media') > -1) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        // return from cache, otherwise fetch from network
        if (!response) {
          return fetch(request).then(res => {
            cacheAsset(request, res.clone())
            return res
          })
        }
        return response
      })
    )
  }
})

function cacheAsset(request, response) {
  return new Promise( function (resolve, reject) {
    caches.open('assets')
      .then(cache => {
        cache.put(request, response)
          .then(() => {
            resolve()
          })
          .catch(err => {
            console.error('error when syncing assets', err)
            reject()
          })
      }).catch(err => {
        console.error('error when opening cache', err)
        reject()
      })
  })
}
