export const fetcher = (url, data, { headers, ...init }) => data 
  ? fetch(url, init).then(res => res.json())
  : fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(data),
    ...init
  }).then(res => res.json())

export const get = (url, init) => fetcher(url, null, init)
export const post = (url, data, init) => fetcher(url, data, init)
export const put = (url, data, init) => fetcher(url, data, { method: 'PUT', ...init })
export const patch = (url, data, init) => fetcher(url, data, { method: 'PATCH', ...init })
export const del = (url, init) => fetcher(url, null, { method: 'DELETE', ...init })