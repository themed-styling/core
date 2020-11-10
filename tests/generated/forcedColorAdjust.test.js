import 'jest-styled-components'

import { forcedColorAdjust } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(forcedColorAdjust, 'forcedColorAdjust')
