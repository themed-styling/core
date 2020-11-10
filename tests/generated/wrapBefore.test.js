import 'jest-styled-components'

import { wrapBefore } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(wrapBefore, 'wrapBefore')
