import borderBottomColor from '../../src/lib/border/borderBottomColor'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderBottomColor(333)({}),
    [['border-bottom-color', ':'], '#333', ';'],
    'border-bottom-color:#333;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderBottomColor('DarkSlateBlue')({}),
    [['border-bottom-color', ':'], 'DarkSlateBlue', ';'],
    'border-bottom-color:DarkSlateBlue;'
  )
})
