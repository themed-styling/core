import percentTransformer from '../../src/lib/util/transformers/percentTransformer'

test('transforms number less than or equal to 1 into percentTransformerage', () => {
  expect(percentTransformer(0)).toStrictEqual([0, '%'])
  expect(percentTransformer(0).join('')).toBe('0%')
  expect(percentTransformer(0.5)).toStrictEqual([50, '%'])
  expect(percentTransformer(0.5).join('')).toBe('50%')
  expect(percentTransformer(1)).toStrictEqual([100, '%'])
  expect(percentTransformer(1).join('')).toBe('100%')
})

test('transforms number greater than 1 into percentTransformerage', () => {
  expect(percentTransformer(30)).toStrictEqual([30, '%'])
  expect(percentTransformer(30).join('')).toBe('30%')
  expect(percentTransformer(120)).toStrictEqual([120, '%'])
  expect(percentTransformer(120).join('')).toBe('120%')
})

test('leaves string value be', () => {
  expect(percentTransformer('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => percentTransformer(undefined)).toThrow(TypeError)
  expect(() => percentTransformer(null)).toThrow(TypeError)
  expect(() => percentTransformer({})).toThrow(TypeError)
  expect(() => percentTransformer([])).toThrow(TypeError)
  expect(() => percentTransformer(() => 123)).toThrow(TypeError)
})
