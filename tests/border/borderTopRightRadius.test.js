import borderTopRightRadius from '../../src/lib/border/borderTopRightRadius'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderTopRightRadius(5)({}),
    [['border-top-right-radius', ':'], '5px', ';'],
    'border-top-right-radius:5px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderTopRightRadius('1rem')({}),
    [['border-top-right-radius', ':'], '1rem', ';'],
    'border-top-right-radius:1rem;'
  )
})
