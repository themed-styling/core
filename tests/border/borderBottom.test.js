import borderBottom from '../../src/lib/border/borderBottom'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderBottom('3px solid DarkSlateBlue')({}),
    [['border-bottom', ':'], '3px solid DarkSlateBlue', ';'],
    'border-bottom:3px solid DarkSlateBlue;'
  )
})
