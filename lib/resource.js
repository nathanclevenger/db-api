// import { Database, Resource, ListOptions } from 'types'

export const Resource = resource => options => new Proxy({}, {
  get: (target, name) => {
    if (!target[name]) target[name] = resource(String(name), options)
    return target[name]
  }
})