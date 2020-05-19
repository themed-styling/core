import px from '../src/lib/util/transformers/px'

test('transforms number into px value', () => {
  expect(px(10)).toBe('10px')
})

test('leaves string value be', () => {
  expect(px('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => px(undefined)).toThrow(TypeError)
  expect(() => px(null)).toThrow(TypeError)
  expect(() => px({})).toThrow(TypeError)
  expect(() => px([])).toThrow(TypeError)
  expect(() => px(() => 123)).toThrow(TypeError)
})
