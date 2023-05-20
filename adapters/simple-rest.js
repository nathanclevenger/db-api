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
  const { q, ...filter } = JSON.parse(query?.filter)
  const [ sort, order ] = JSON.parse(query?.sort)
  const [ offset = 0, end = 99 ] =  JSON.parse(query?.range)
  return { q, filter, offset, limit: end - offset + 1, sort, order: order?.toLowerCase() }
}

const newId = () => Math.random().toString(36).substring(2, 9)