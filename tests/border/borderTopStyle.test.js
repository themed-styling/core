import borderTopStyle from '../../src/lib/border/borderTopStyle'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderTopStyle('dotted')({}),
    [['border-top-style', ':'], 'dotted', ';'],
    'border-top-style:dotted;'
  )
})
