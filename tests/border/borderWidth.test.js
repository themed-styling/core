import borderWidth from '../../src/lib/border/borderWidth'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderWidth(3)({}),
    [['border-width', ':'], '3px', ';'],
    'border-width:3px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderWidth('1rem')({}),
    [['border-width', ':'], '1rem', ';'],
    'border-width:1rem;'
  )
})
