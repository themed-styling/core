import 'jest-styled-components'

import { colorAdjust } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(colorAdjust, 'colorAdjust')
