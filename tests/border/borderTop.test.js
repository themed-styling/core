import borderTop from '../../src/lib/border/borderTop'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderTop('3px solid DarkSlateBlue')({}),
    [['border-top', ':'], '3px solid DarkSlateBlue', ';'],
    'border-top:3px solid DarkSlateBlue;'
  )
})
