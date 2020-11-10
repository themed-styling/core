import 'jest-styled-components'

import { hyphenateCharacter } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenateCharacter, 'hyphenateCharacter')
