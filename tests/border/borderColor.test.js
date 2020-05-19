import borderColor from '../../src/lib/border/borderColor'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderColor(333)({}),
    [['border-color', ':'], '#333', ';'],
    'border-color:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderColor('DarkSlateBlue')({}),
    [['border-color', ':'], 'DarkSlateBlue', ';'],
    'border-color:DarkSlateBlue;'
  )
})
