import boxShadow from '../src/lib/boxShadow'
import { coreTest } from './utilities'

test('constructs array (string)', () => {
  coreTest(
    boxShadow('0 0 5px DarkSlateBlue')({}),
    [['box-shadow', ':'], '0 0 5px DarkSlateBlue', ';'],
    'box-shadow:0 0 5px DarkSlateBlue;'
  )
})
