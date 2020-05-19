import top from '../../src/lib/positioning/top'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(top(10)({}), [['top', ':'], '10px', ';'], 'top:10px;')
  coreTest(top(-20)({}), [['top', ':'], '-20px', ';'], 'top:-20px;')
})

test('constructs array (string)', () => {
  coreTest(top('1rem')({}), [['top', ':'], '1rem', ';'], 'top:1rem;')
})
