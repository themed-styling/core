import borderBottomLeftRadius from '../../src/lib/border/borderBottomLeftRadius'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderBottomLeftRadius(5)({}),
    [['border-bottom-left-radius', ':'], '5px', ';'],
    'border-bottom-left-radius:5px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderBottomLeftRadius('1rem')({}),
    [['border-bottom-left-radius', ':'], '1rem', ';'],
    'border-bottom-left-radius:1rem;'
  )
})
