import matrix3D from '../../src/lib/transform/matrix3D'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    matrix3D('1,2,2,4,1,2,5,4,1,1,3,6,1,4,8,4')({}),
    ['transform:matrix3d(', '1,2,2,4,1,2,5,4,1,1,3,6,1,4,8,4', ');'],
    'transform:matrix3d(1,2,2,4,1,2,5,4,1,1,3,6,1,4,8,4);'
  )
})
