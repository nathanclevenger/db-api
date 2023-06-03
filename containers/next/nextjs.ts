export const handler = async (req, {params}) => {
  const {resources} = params
  const [ resource, id ] = resources
  const {foo} = req.db
  const item = await foo.get(id)
  return {item}
}

export { handler as GET }