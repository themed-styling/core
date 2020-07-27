import fs from 'fs'

import format from './format.js'
import indexTemplate from './templates/indexTemplate.js'

export const writeFunctions = (functionObjects, template) => {
  for (let fnObject of functionObjects) {
    fs.writeFile(
      fnObject.namespace
        ? `./src/lib/generated/${fnObject.namespace}/${fnObject.name}.js`
        : `./src/lib/generated/${fnObject.name}.js`,
      format(template(fnObject)),
      error => {
        if (error) {
          console.error(`${fnObject.name}: ${error.message}`)
        } else {
          console.info(
            fnObject.namespace
              ? `OK ${fnObject.namespace}/${fnObject.name} (${fnObject.transformerType})`
              : `OK ${fnObject.name} (${fnObject.transformerType})`
          )
        }
      }
    )
  }
}

export const writeIndex = functionObjects => {
  fs.writeFile(
    './src/lib/generated/index.js',
    format(indexTemplate(functionObjects)),
    error => {
      if (error) {
        console.error(`index: ${error.message}`)
      } else {
        console.info(`index OK`)
      }
    }
  )
}
