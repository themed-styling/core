import display from '../src/lib/display'
import { coreTest } from './utilities'

test('constructs array (string)', () => {
  coreTest(
    display('flex')({}),
    [['display', ':'], 'flex', ';'],
    'display:flex;'
  )
  coreTest(
    display('none')({}),
    [['display', ':'], 'none', ';'],
    'display:none;'
  )
})
