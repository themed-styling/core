import colorTransformer from '../../src/lib/util/transformers/colorTransformer'

test('transforms number into hex value', () => {
  expect(colorTransformer(111)).toStrictEqual(['#', 111])
})

test('leaves string value be', () => {
  expect(colorTransformer('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => colorTransformer(undefined)).toThrow(TypeError)
  expect(() => colorTransformer(null)).toThrow(TypeError)
  expect(() => colorTransformer({})).toThrow(TypeError)
  expect(() => colorTransformer([])).toThrow(TypeError)
  expect(() => colorTransformer(() => 123)).toThrow(TypeError)
})
