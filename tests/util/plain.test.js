import plainTransformer from '../../src/lib/util/transformers/plainTransformer'

test('leaves any value be', () => {
  expect(plainTransformer(10)).toBe(10)
  expect(plainTransformer('asdasd')).toBe('asdasd')
  expect(plainTransformer(undefined)).toBe(undefined)
  expect(plainTransformer(null)).toBe(null)
  expect(plainTransformer({})).toStrictEqual({})
  expect(plainTransformer([])).toStrictEqual([])
})
