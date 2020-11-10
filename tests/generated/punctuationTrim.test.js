import 'jest-styled-components'

import { punctuationTrim } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(punctuationTrim, 'punctuationTrim')
