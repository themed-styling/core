import 'jest-styled-components'

import { whiteSpaceCollapsing } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(whiteSpaceCollapsing, 'whiteSpaceCollapsing')
