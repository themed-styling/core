import borderRight from '../../src/lib/border/borderRight'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderRight('3px solid DarkSlateBlue')({}),
    [['border-right', ':'], '3px solid DarkSlateBlue', ';'],
    'border-right:3px solid DarkSlateBlue;'
  )
})
