import right from '../../src/lib/positioning/right'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(right(10)({}), [['right', ':'], '10px', ';'], 'right:10px;')
  coreTest(right(-20)({}), [['right', ':'], '-20px', ';'], 'right:-20px;')
})

test('constructs array (string)', () => {
  coreTest(right('1rem')({}), [['right', ':'], '1rem', ';'], 'right:1rem;')
})
