import borderRadius from '../../src/lib/border/borderRadius'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderRadius(5)({}),
    [['border-radius', ':'], '5px', ';'],
    'border-radius:5px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderRadius('1rem')({}),
    [['border-radius', ':'], '1rem', ';'],
    'border-radius:1rem;'
  )
})
