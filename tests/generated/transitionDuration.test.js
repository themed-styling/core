import 'jest-styled-components'

import { transitionDuration } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(transitionDuration, 'transitionDuration')
