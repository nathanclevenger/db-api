import { error, json, Router } from 'itty-router'

const router = Router()

router
  .get('/', () => 'Success!')
  .all('*', () => error(404))

export default {
  fetch: (request, env, ctx) => router.handle(request, env, ctx).then(json).catch(error)
}