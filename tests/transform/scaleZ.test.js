import scaleZ from '../../src/lib/transform/scaleZ'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    scaleZ(1.5)({}),
    ['transform:scaleZ(', 1.5, ');'],
    'transform:scaleZ(1.5);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    scaleZ('2')({}),
    ['transform:scaleZ(', '2', ');'],
    'transform:scaleZ(2);'
  )
})
