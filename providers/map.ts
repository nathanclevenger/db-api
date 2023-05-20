import { Database, Resource, ListOptions } from 'types'

export const MemoryMap: Database = (options) => new Proxy({}, {
  get: (target, name) => {
    if (!target[name]) target[name] = new MemoryMapResource(String(name))
    return target[name]
  }
})

class MemoryMapResource<T> extends Map<string, T> {
  constructor(public name: string, public schema?: any) {
    super()
  }
  // list: (options: ListOptions<T>) => Object.fromEntries(this)
}