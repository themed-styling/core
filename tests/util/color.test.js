import color from '../../src/lib/util/transformers/color'

test('transforms number into hex value', () => {
  expect(color(111)).toBe('#111')
})

test('leaves string value be', () => {
  expect(color('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => color(undefined)).toThrow(TypeError)
  expect(() => color(null)).toThrow(TypeError)
  expect(() => color({})).toThrow(TypeError)
  expect(() => color([])).toThrow(TypeError)
  expect(() => color(() => 123)).toThrow(TypeError)
})
