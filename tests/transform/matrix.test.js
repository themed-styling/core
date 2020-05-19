import matrix from '../../src/lib/transform/matrix'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    matrix('1,2,3,4,5,6')({}),
    ['transform:matrix(', '1,2,3,4,5,6', ');'],
    'transform:matrix(1,2,3,4,5,6);'
  )
})
