import 'jest-styled-components'

import { pauseBefore } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(pauseBefore, 'pauseBefore')
