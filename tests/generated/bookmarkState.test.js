import 'jest-styled-components'

import { bookmarkState } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(bookmarkState, 'bookmarkState')
