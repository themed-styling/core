import bottom from '../../src/lib/positioning/bottom'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(bottom(10)({}), [['bottom', ':'], '10px', ';'], 'bottom:10px;')
  coreTest(bottom(-20)({}), [['bottom', ':'], '-20px', ';'], 'bottom:-20px;')
})

test('constructs array (string)', () => {
  coreTest(bottom('1rem')({}), [['bottom', ':'], '1rem', ';'], 'bottom:1rem;')
})
