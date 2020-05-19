import borderRightWidth from '../../src/lib/border/borderRightWidth'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderRightWidth(3)({}),
    [['border-right-width', ':'], '3px', ';'],
    'border-right-width:3px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderRightWidth('1rem')({}),
    [['border-right-width', ':'], '1rem', ';'],
    'border-right-width:1rem;'
  )
})
