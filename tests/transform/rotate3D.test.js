import rotate3D from '../../src/lib/transform/rotate3D'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    rotate3D('3,3,3,2rad')({}),
    ['transform:rotate3d(', '3,3,3,2rad', ');'],
    'transform:rotate3d(3,3,3,2rad);'
  )
})
