import 'jest-styled-components'

import { leadingTrim } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(leadingTrim, 'leadingTrim')
