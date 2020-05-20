import flexGrow from '../../src/lib/flex/flexGrow'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(flexGrow(1)({}), [['flex-grow', ':'], 1, ';'], 'flex-grow:1;')
  coreTest(flexGrow(0.5)({}), [['flex-grow', ':'], 0.5, ';'], 'flex-grow:0.5;')
})

test('constructs array (string)', () => {
  coreTest(flexGrow('0')({}), [['flex-grow', ':'], '0', ';'], 'flex-grow:0;')
})
