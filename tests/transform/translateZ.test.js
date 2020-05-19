import translateZ from '../../src/lib/transform/translateZ'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    translateZ(10)({}),
    ['transform:translateZ(', '10px', ');'],
    'transform:translateZ(10px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    translateZ('20px')({}),
    ['transform:translateZ(', '20px', ');'],
    'transform:translateZ(20px);'
  )
})
