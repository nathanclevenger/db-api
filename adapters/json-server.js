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
  const { _sort, _order, _start = 0, _end = 99, q, ...filter } = query
  return { q, filter, offset: _start, limit: _end - _start + 1, sort: _sort, order: _order?.toLowerCase() }
}

const newId = () => Math.random().toString(36).substring(2, 9)