import { Resource } from '../lib/resource'

export const ObjectProvider = Resource(name => {
  const obj = {}
  return {
    name,
    list: options => obj,
    get: id => obj[id],
    set: (id, value) => obj[id] = value,
  }
})