import translateY from '../../src/lib/transform/translateY'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    translateY(10)({}),
    ['transform:translateY(', '10px', ');'],
    'transform:translateY(10px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    translateY('20px')({}),
    ['transform:translateY(', '20px', ');'],
    'transform:translateY(20px);'
  )
})
