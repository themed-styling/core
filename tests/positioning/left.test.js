import left from '../../src/lib/positioning/left'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(left(10)({}), [['left', ':'], '10px', ';'], 'left:10px;')
  coreTest(left(-20)({}), [['left', ':'], '-20px', ';'], 'left:-20px;')
})

test('constructs array (string)', () => {
  coreTest(left('1rem')({}), [['left', ':'], '1rem', ';'], 'left:1rem;')
})
