import color from '../src/lib/util/transformers/color'

test('transforms number into hex value', () => {
  expect(color(111)).toBe('#111')
})

test('leaves string values be', () => {
  expect(color('asdasd')).toBe('asdasd')
})
