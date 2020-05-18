import plain from '../src/lib/util/transformers/plain'

test('leaves number value be', () => {
  expect(plain(10)).toBe(10)
})

test('leaves string values be', () => {
  expect(plain('asdasd')).toBe('asdasd')
})
