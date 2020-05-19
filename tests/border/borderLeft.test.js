import borderLeft from '../../src/lib/border/borderLeft'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderLeft('3px solid DarkSlateBlue')({}),
    [['border-left', ':'], '3px solid DarkSlateBlue', ';'],
    'border-left:3px solid DarkSlateBlue;'
  )
})
