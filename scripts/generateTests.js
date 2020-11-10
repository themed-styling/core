import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'
import * as core from '../src/index.js'
const { propType, css, theme: _, ...functions } = core

const template = name => `import 'jest-styled-components'

import { ${name} } from '../../src/index.js'

import {
  testAllOn
} from '../utilities.js'

testAllOn(${name}, '${name}')
`

for (const name of Object.keys(functions)) {
  fs.writeFileSync(
    `tests/generated/${name}.test.js`,
    prettier.format(template(name), { ...prettierConfig, parser: 'babel' })
  )
}
