import backgroundAttachment from '../../src/lib/background/backgroundAttachment'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    backgroundAttachment('fixed')({}),
    [['background-attachment', ':'], 'fixed', ';'],
    'background-attachment:fixed;'
  )
})
