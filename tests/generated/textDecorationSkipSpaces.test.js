import 'jest-styled-components'

import { textDecorationSkipSpaces } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(textDecorationSkipSpaces, 'textDecorationSkipSpaces')
