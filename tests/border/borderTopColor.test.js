import borderTopColor from '../../src/lib/border/borderTopColor'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderTopColor(333)({}),
    [['border-top-color', ':'], '#333', ';'],
    'border-top-color:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderTopColor('DarkSlateBlue')({}),
    [['border-top-color', ':'], 'DarkSlateBlue', ';'],
    'border-top-color:DarkSlateBlue;'
  )
})
