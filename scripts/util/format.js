import fs from 'fs'
import prettier from 'prettier'

const packageJSON = JSON.parse(fs.readFileSync('./package.json'))
const prettierConfig = {
  ...packageJSON.prettier,
  parser: 'babel',
}

export default string => prettier.format(string, prettierConfig)
