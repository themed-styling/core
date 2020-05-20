import borderTopLeftRadius from '../../src/lib/border/borderTopLeftRadius'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderTopLeftRadius(5)({}),
    [['border-top-left-radius', ':'], '5px', ';'],
    'border-top-left-radius:5px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderTopLeftRadius('1rem')({}),
    [['border-top-left-radius', ':'], '1rem', ';'],
    'border-top-left-radius:1rem;'
  )
})
