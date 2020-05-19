import borderBottomStyle from '../../src/lib/border/borderBottomStyle'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderBottomStyle('dotted')({}),
    [['border-bottom-style', ':'], 'dotted', ';'],
    'border-bottom-style:dotted;'
  )
})
