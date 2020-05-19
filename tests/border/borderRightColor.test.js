import borderRightColor from '../../src/lib/border/borderRightColor'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderRightColor(333)({}),
    [['border-right-color', ':'], '#333', ';'],
    'border-right-color:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderRightColor('DarkSlateBlue')({}),
    [['border-right-color', ':'], 'DarkSlateBlue', ';'],
    'border-right-color:DarkSlateBlue;'
  )
})
