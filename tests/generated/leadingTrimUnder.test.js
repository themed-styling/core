import 'jest-styled-components'

import { leadingTrimUnder } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(leadingTrimUnder, 'leadingTrimUnder')
