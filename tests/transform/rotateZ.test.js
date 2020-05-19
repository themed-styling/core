import rotateZ from '../../src/lib/transform/rotateZ'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    rotateZ(36)({}),
    ['transform:rotateZ(', [36, 'deg'], ');'],
    'transform:rotateZ(36deg);'
  )
  coreTest(
    rotateZ(-36)({}),
    ['transform:rotateZ(', [-36, 'deg'], ');'],
    'transform:rotateZ(-36deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    rotateZ('2rad')({}),
    ['transform:rotateZ(', '2rad', ');'],
    'transform:rotateZ(2rad);'
  )
})
