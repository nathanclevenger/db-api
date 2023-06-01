import { JSONSchema7 } from 'json-schema'

export type Database = (options: any) => Record<string, Resource<any>>
// export type Database = (options: any) => {
//   resources: Resource<any>[]
// }

export type Resource<T> = {
  name: string
  schema?: JSONSchema7
  // list: (options: ListOptions<T>) => Promise<T[]> IterableIterator
  list: (options?: ListOptions<T>) => Promise<IterableIterator<T>>
  get: (id: string) => Promise<T>
  set: (id: string, value: any) => Promise<T>
  has: (id: string) => Promise<boolean>
  delete: (id: string) => Promise<T>
  clear: () => Promise<void>
}

export type ListOptions<T> = {
  q?: string
  filter?: Partial<T>
  limit?: number
  offset?: number
  sort?: string
  order?: 'asc' | 'desc'
}