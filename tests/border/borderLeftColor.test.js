import borderLeftColor from '../../src/lib/border/borderLeftColor'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderLeftColor(333)({}),
    [['border-left-color', ':'], '#333', ';'],
    'border-left-color:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderLeftColor('DarkSlateBlue')({}),
    [['border-left-color', ':'], 'DarkSlateBlue', ';'],
    'border-left-color:DarkSlateBlue;'
  )
})
