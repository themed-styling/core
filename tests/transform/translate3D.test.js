import translate3D from '../../src/lib/transform/translate3D'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    translate3D(10)({}),
    ['transform:translate3d(', '10px', ');'],
    'transform:translate3d(10px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    translate3D('10px,20px,30px')({}),
    ['transform:translate3d(', '10px,20px,30px', ');'],
    'transform:translate3d(10px,20px,30px);'
  )
})
