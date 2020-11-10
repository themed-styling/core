import 'jest-styled-components'

import { filterURL } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(filterURL, 'filterURL')
