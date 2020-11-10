import 'jest-styled-components'

import { hyphenateLines } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenateLines, 'hyphenateLines')
