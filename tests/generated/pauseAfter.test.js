import 'jest-styled-components'

import { pauseAfter } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(pauseAfter, 'pauseAfter')
