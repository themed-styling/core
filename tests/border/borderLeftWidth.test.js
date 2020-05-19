import borderLeftWidth from '../../src/lib/border/borderLeftWidth'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderLeftWidth(3)({}),
    [['border-left-width', ':'], '3px', ';'],
    'border-left-width:3px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderLeftWidth('1rem')({}),
    [['border-left-width', ':'], '1rem', ';'],
    'border-left-width:1rem;'
  )
})
