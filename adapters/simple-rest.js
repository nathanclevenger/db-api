export default (api, db) => {
  api
    .get('/', () => db)
    .get('/:resource', ({resource, query}) => db[resource].list(getQuery(query)))
    .get('/:resource/:id', ({resource, id}) => db[resource].get(id))
    .post('/:resource', ({resource, body}) => db[resource].set(body.id ?? newId(), body))
    .put('/:resource/:id', ({resource, id, body}) => db[resource].set(id, body))
    .patch('/:resource/:id', ({resource, id, body}) => db[resource].set(id, {...db[resource].get(id), ...body}))
    .delete('/:resource/:id', ({resource, id}) => db[resource].delete(id))
}

getQuery = query => {
  const { filter, sort, limit, offset } = query
  const filterFn = filter ? new Function('item', `return ${filter}`) : () => true
  const sortFn = sort ? new Function('a', 'b', `return ${sort}`) : () => 0
  return { filterFn, sortFn, limit, offset }
}

const newId = () => Math.random().toString(36).substring(2, 9)