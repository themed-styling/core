import px from '../src/lib/util/transformers/px'

test('transforms number into px value', () => {
  expect(px(10)).toBe('10px')
})

test('leaves string values be', () => {
  expect(px('asdasd')).toBe('asdasd')
})
