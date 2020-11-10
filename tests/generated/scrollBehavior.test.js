import 'jest-styled-components'

import { scrollBehavior } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(scrollBehavior, 'scrollBehavior')
