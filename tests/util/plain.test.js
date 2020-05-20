import plain from '../../src/lib/util/transformers/plain'

test('leaves any value be', () => {
  expect(plain(10)).toBe(10)
  expect(plain('asdasd')).toBe('asdasd')
  expect(plain(undefined)).toBe(undefined)
  expect(plain(null)).toBe(null)
  expect(plain({})).toStrictEqual({})
  expect(plain([])).toStrictEqual([])
})
