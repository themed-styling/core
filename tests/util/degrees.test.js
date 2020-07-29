import degreesTransformer from '../../src/lib/util/transformers/degreesTransformer'

test('transforms number into degree value', () => {
  expect(degreesTransformer(0)).toStrictEqual([0, 'deg'])
  expect(degreesTransformer(0).join('')).toBe('0deg')
  expect(degreesTransformer(58)).toStrictEqual([58, 'deg'])
  expect(degreesTransformer(58).join('')).toBe('58deg')
  expect(degreesTransformer(360)).toStrictEqual([360, 'deg'])
  expect(degreesTransformer(360).join('')).toBe('360deg')
  expect(degreesTransformer(-36)).toStrictEqual([-36, 'deg'])
  expect(degreesTransformer(-36).join('')).toBe('-36deg')
})

test('leaves string value be', () => {
  expect(degreesTransformer('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => degreesTransformer(undefined)).toThrow(TypeError)
  expect(() => degreesTransformer(null)).toThrow(TypeError)
  expect(() => degreesTransformer({})).toThrow(TypeError)
  expect(() => degreesTransformer([])).toThrow(TypeError)
  expect(() => degreesTransformer(() => 123)).toThrow(TypeError)
})
