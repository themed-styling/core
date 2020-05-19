import borderTopWidth from '../../src/lib/border/borderTopWidth'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderTopWidth(3)({}),
    [['border-top-width', ':'], '3px', ';'],
    'border-top-width:3px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderTopWidth('1rem')({}),
    [['border-top-width', ':'], '1rem', ';'],
    'border-top-width:1rem;'
  )
})
