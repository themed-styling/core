import borderBottomRightRadius from '../../src/lib/border/borderBottomRightRadius'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    borderBottomRightRadius(5)({}),
    [['border-bottom-right-radius', ':'], '5px', ';'],
    'border-bottom-right-radius:5px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    borderBottomRightRadius('1rem')({}),
    [['border-bottom-right-radius', ':'], '1rem', ';'],
    'border-bottom-right-radius:1rem;'
  )
})
