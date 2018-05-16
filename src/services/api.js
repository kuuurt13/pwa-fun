import giphyConfig from '../configs/giphy'

const { url, apiKey: api_key } = giphyConfig

export function searchImages(q) {
  return makeRequest({
    url: `${url}/gifs/search`,
    params: {
      q,
      api_key
    }
  })
}

function makeRequest({ url, method = 'GET', params, data }) {
  return fetch(
    `${url}?${getParams(params)}`,
    {
      method,
      data
    }
  ).then(res => res.json())
}

function getParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')
}
