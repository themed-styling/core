import rotateX from '../../src/lib/transform/rotateX'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    rotateX(36)({}),
    ['transform:rotateX(', [36, 'deg'], ');'],
    'transform:rotateX(36deg);'
  )
  coreTest(
    rotateX(-36)({}),
    ['transform:rotateX(', [-36, 'deg'], ');'],
    'transform:rotateX(-36deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    rotateX('2rad')({}),
    ['transform:rotateX(', '2rad', ');'],
    'transform:rotateX(2rad);'
  )
})
