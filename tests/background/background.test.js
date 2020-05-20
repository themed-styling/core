import background from '../../src/lib/background/background'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    background(333)({}),
    [['background', ':'], '#333', ';'],
    'background:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    background('DarkSlateBlue')({}),
    [['background', ':'], 'DarkSlateBlue', ';'],
    'background:DarkSlateBlue;'
  )
})
