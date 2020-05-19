import scale3D from '../../src/lib/transform/scale3D'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    scale3D(1.5)({}),
    ['transform:scale3d(', 1.5, ');'],
    'transform:scale3d(1.5);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    scale3D('1.5,2,3')({}),
    ['transform:scale3d(', '1.5,2,3', ');'],
    'transform:scale3d(1.5,2,3);'
  )
})
