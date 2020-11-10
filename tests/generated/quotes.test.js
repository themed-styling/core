import 'jest-styled-components'

import { quotes } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(quotes, 'quotes')
