import construct from '../src/lib/util/construct'
import color from '../src/lib/util/transformers/color'
import plain from '../src/lib/util/transformers/plain'

test('constructs array with number and default transformer', () => {
  expect(construct(123, {}, 'test-property')).toStrictEqual([
    ['test-property', ':'],
    '123px',
    ';',
  ])
})

test('constructs array with number and color transformer', () => {
  expect(construct(123, {}, 'test-property', color)).toStrictEqual([
    ['test-property', ':'],
    '#123',
    ';',
  ])
})

test('constructs array with number and plain transformer', () => {
  expect(construct(123, {}, 'test-property', plain)).toStrictEqual([
    ['test-property', ':'],
    123,
    ';',
  ])
})

test('constructs array with string and default transformer', () => {
  expect(construct('asdasd', {}, 'test-property')).toStrictEqual([
    ['test-property', ':'],
    'asdasd',
    ';',
  ])
})

test('constructs array with string and color transformer', () => {
  expect(construct('DarkSlateBlue', {}, 'test-property', color)).toStrictEqual([
    ['test-property', ':'],
    'DarkSlateBlue',
    ';',
  ])
})

test('constructs array with string and plain transformer', () => {
  expect(construct('asdasd', {}, 'test-property', plain)).toStrictEqual([
    ['test-property', ':'],
    'asdasd',
    ';',
  ])
})
