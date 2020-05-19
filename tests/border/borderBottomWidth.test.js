import borderBottomWidth from '../../src/lib/border/borderBottomWidth'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderBottomWidth(3)({}),
    [['border-bottom-width', ':'], '3px', ';'],
    'border-bottom-width:3px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderBottomWidth('1rem')({}),
    [['border-bottom-width', ':'], '1rem', ';'],
    'border-bottom-width:1rem;'
  )
})
