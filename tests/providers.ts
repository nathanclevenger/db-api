import test from 'ava'
import { MemoryMap } from '../providers/map.js'

test('Create Database', async t => {
	const db = MemoryMap({})
  db.foo.set('foo', 'bar')
  const bar = db.foo.get('foo')
	t.is(await bar, 'bar')
})