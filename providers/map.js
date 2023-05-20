import { Resource } from '../lib/resource'

export const MapProvider = Resource(name => {
  const map = new Map()
  return {
    name,
    list: options => Object.fromEntries(map),
    get: id => map.get(id),
    set: (id, value) => map.set(id, value),
  }
})