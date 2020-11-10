import 'jest-styled-components'

import { hyphenateResource } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenateResource, 'hyphenateResource')
