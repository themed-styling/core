import 'jest-styled-components'

import { hangingPunctuation } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hangingPunctuation, 'hangingPunctuation')
