import degrees from '../../src/lib/util/transformers/degrees'

test('transforms number into degree value', () => {
  expect(degrees(0)).toStrictEqual([0, 'deg'])
  expect(degrees(0).join('')).toBe('0deg')
  expect(degrees(58)).toStrictEqual([58, 'deg'])
  expect(degrees(58).join('')).toBe('58deg')
  expect(degrees(360)).toStrictEqual([360, 'deg'])
  expect(degrees(360).join('')).toBe('360deg')
  expect(degrees(-36)).toStrictEqual([-36, 'deg'])
  expect(degrees(-36).join('')).toBe('-36deg')
})

test('leaves string value be', () => {
  expect(degrees('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => degrees(undefined)).toThrow(TypeError)
  expect(() => degrees(null)).toThrow(TypeError)
  expect(() => degrees({})).toThrow(TypeError)
  expect(() => degrees([])).toThrow(TypeError)
  expect(() => degrees(() => 123)).toThrow(TypeError)
})
