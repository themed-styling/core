import border from '../../src/lib/border/border'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    border('3px solid DarkSlateBlue')({}),
    [['border', ':'], '3px solid DarkSlateBlue', ';'],
    'border:3px solid DarkSlateBlue;'
  )
})
