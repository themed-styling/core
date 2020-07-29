import pxTransformer from '../../src/lib/util/transformers/pxTransformer'

test('transforms number into px value', () => {
  expect(pxTransformer(10)).toStrictEqual([10, 'px'])
})

test('leaves string value be', () => {
  expect(pxTransformer('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => pxTransformer(undefined)).toThrow(TypeError)
  expect(() => pxTransformer(null)).toThrow(TypeError)
  expect(() => pxTransformer({})).toThrow(TypeError)
  expect(() => pxTransformer([])).toThrow(TypeError)
  expect(() => pxTransformer(() => 123)).toThrow(TypeError)
})
