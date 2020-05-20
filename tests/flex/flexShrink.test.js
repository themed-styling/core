import flexShrink from '../../src/lib/flex/flexShrink'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(flexShrink(1)({}), [['flex-shrink', ':'], 1, ';'], 'flex-shrink:1;')
  coreTest(
    flexShrink(0.5)({}),
    [['flex-shrink', ':'], 0.5, ';'],
    'flex-shrink:0.5;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    flexShrink('0')({}),
    [['flex-shrink', ':'], '0', ';'],
    'flex-shrink:0;'
  )
})
