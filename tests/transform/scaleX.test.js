import scaleX from '../../src/lib/transform/scaleX'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    scaleX(1.5)({}),
    ['transform:scaleX(', 1.5, ');'],
    'transform:scaleX(1.5);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    scaleX('2')({}),
    ['transform:scaleX(', '2', ');'],
    'transform:scaleX(2);'
  )
})
