import translate from '../../src/lib/transform/translate'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    translate(10)({}),
    ['transform:translate(', '10px', ');'],
    'transform:translate(10px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    translate('10px,20px')({}),
    ['transform:translate(', '10px,20px', ');'],
    'transform:translate(10px,20px);'
  )
})
