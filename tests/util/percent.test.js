import percent from '../../src/lib/util/transformers/percent'

test('transforms number less than or equal to 1 into percentage', () => {
  expect(percent(0)).toStrictEqual([0, '%'])
  expect(percent(0).join('')).toBe('0%')
  expect(percent(0.5)).toStrictEqual([50, '%'])
  expect(percent(0.5).join('')).toBe('50%')
  expect(percent(1)).toStrictEqual([100, '%'])
  expect(percent(1).join('')).toBe('100%')
})

test('transforms number greater than 1 into percentage', () => {
  expect(percent(30)).toStrictEqual([30, '%'])
  expect(percent(30).join('')).toBe('30%')
  expect(percent(120)).toStrictEqual([120, '%'])
  expect(percent(120).join('')).toBe('120%')
})

test('leaves string value be', () => {
  expect(percent('asdasd')).toBe('asdasd')
})

test('throws type error', () => {
  expect(() => percent(undefined)).toThrow(TypeError)
  expect(() => percent(null)).toThrow(TypeError)
  expect(() => percent({})).toThrow(TypeError)
  expect(() => percent([])).toThrow(TypeError)
  expect(() => percent(() => 123)).toThrow(TypeError)
})
