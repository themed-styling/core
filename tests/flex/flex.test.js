import flex from '../../src/lib/flex/flex'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(flex(1)({}), [['flex', ':'], 1, ';'], 'flex:1;')
})

test('constructs array (string)', () => {
  coreTest(flex('1 1 0')({}), [['flex', ':'], '1 1 0', ';'], 'flex:1 1 0;')
})
