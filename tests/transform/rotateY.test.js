import rotateY from '../../src/lib/transform/rotateY'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    rotateY(36)({}),
    ['transform:rotateY(', [36, 'deg'], ');'],
    'transform:rotateY(36deg);'
  )
  coreTest(
    rotateY(-36)({}),
    ['transform:rotateY(', [-36, 'deg'], ');'],
    'transform:rotateY(-36deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    rotateY('2rad')({}),
    ['transform:rotateY(', '2rad', ');'],
    'transform:rotateY(2rad);'
  )
})
