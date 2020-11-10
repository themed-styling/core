import 'jest-styled-components'

import { hyphenateAfter } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenateAfter, 'hyphenateAfter')
