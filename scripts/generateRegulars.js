import fs from 'fs'

import format from './util/format.js'
import regularTemplate from './util/templates/regularTemplate.js'
import indexTemplate from './util/templates/indexTemplate.js'

const regularFunction = name => namespace => transformerType => ({
  name,
  namespace,
  transformerType,
})

const regularFunctions = [
  regularFunction('boxShadow')()('plain'),
  regularFunction('color')()('color'),
  regularFunction('display')()('plain'),

  regularFunction('alignItems')('alignment')('plain'),
  regularFunction('alignSelf')('alignment')('plain'),
  regularFunction('clear')('alignment')('plain'),
  regularFunction('float')('alignment')('plain'),
  regularFunction('justifyContent')('alignment')('plain'),
  regularFunction('justifySelf')('alignment')('plain'),

  regularFunction('background')('background')('color'),
  regularFunction('backgroundAttachment')('background')('plain'),
  regularFunction('backgroundColor')('background')('color'),
  regularFunction('backgroundPosition')('background')('plain'),
  regularFunction('backgroundRepeat')('background')('plain'),
  regularFunction('backgroundSize')('background')('px'),

  regularFunction('border')('border')('plain'),

  regularFunction('borderBottom')('border')('plain'),
  regularFunction('borderBottomColor')('border')('color'),

  regularFunction('borderBottomLeftRadius')('border')('px'),
  regularFunction('borderBottomRightRadius')('border')('px'),

  regularFunction('borderBottomStyle')('border')('plain'),
  regularFunction('borderBottomWidth')('border')('px'),

  regularFunction('borderColor')('border')('color'),

  regularFunction('borderLeft')('border')('plain'),
  regularFunction('borderLeftColor')('border')('color'),
  regularFunction('borderLeftStyle')('border')('plain'),
  regularFunction('borderLeftWidth')('border')('px'),

  regularFunction('borderRadius')('border')('px'),

  regularFunction('borderRight')('border')('plain'),
  regularFunction('borderRightColor')('border')('color'),
  regularFunction('borderRightStyle')('border')('plain'),
  regularFunction('borderRightWidth')('border')('px'),

  regularFunction('borderStyle')('border')('px'),

  regularFunction('borderTop')('border')('plain'),
  regularFunction('borderTopColor')('border')('color'),

  regularFunction('borderTopLeftRadius')('border')('px'),
  regularFunction('borderTopRightRadius')('border')('px'),

  regularFunction('borderTopStyle')('border')('plain'),
  regularFunction('borderTopWidth')('border')('px'),

  regularFunction('borderWidth')('border')('px'),

  regularFunction('height')('dimensions')('px'),
  regularFunction('maxHeight')('dimensions')('px'),
  regularFunction('maxWidth')('dimensions')('px'),
  regularFunction('minHeight')('dimensions')('px'),
  regularFunction('minWidth')('dimensions')('px'),
  regularFunction('width')('dimensions')('px'),

  regularFunction('flex')('flex')('plain'),
  regularFunction('flexBasis')('flex')('plain'),
  regularFunction('flexGrow')('flex')('plain'),
  regularFunction('flexShrink')('flex')('plain'),

  regularFunction('font')('font')('plain'),
  regularFunction('fontFamily')('font')('plain'),
  regularFunction('fontSize')('font')('px'),
  regularFunction('fontStyle')('font')('plain'),
  regularFunction('fontWeight')('font')('plain'),

  regularFunction('grid')('grid')('plain'),
  regularFunction('gridColumn')('grid')('plain'),
  regularFunction('gridColumnEnd')('grid')('plain'),
  regularFunction('gridColumnGap')('grid')('px'),
  regularFunction('gridColumnStart')('grid')('plain'),
  regularFunction('gridGap')('grid')('px'),
  regularFunction('gridRow')('grid')('plain'),
  regularFunction('gridRowEnd')('grid')('plain'),
  regularFunction('gridRowGap')('grid')('px'),
  regularFunction('gridRowStart')('grid')('plain'),
  regularFunction('gridTemplate')('grid')('plain'),
  regularFunction('gridTemplateColumns')('grid')('plain'),
  regularFunction('gridTemplateRows')('grid')('plain'),

  regularFunction('margin')('margin')('px'),
  regularFunction('marginBottom')('margin')('px'),
  regularFunction('marginLeft')('margin')('px'),
  regularFunction('marginRight')('margin')('px'),
  regularFunction('marginTop')('margin')('px'),

  regularFunction('padding')('padding')('px'),
  regularFunction('paddingBottom')('padding')('px'),
  regularFunction('paddingLeft')('padding')('px'),
  regularFunction('paddingRight')('padding')('px'),
  regularFunction('paddingTop')('padding')('px'),

  regularFunction('bottom')('positioning')('px'),
  regularFunction('left')('positioning')('px'),
  regularFunction('position')('positioning')('plain'),
  regularFunction('right')('positioning')('px'),
  regularFunction('top')('positioning')('px'),
]

for (let { name, namespace, transformerType } of regularFunctions) {
  fs.writeFile(
    namespace
      ? `./src/lib/generated/${namespace}/${name}.js`
      : `./src/lib/generated/${name}.js`,
    format(
      regularTemplate({
        name,
        namespace,
        transformerType,
      })
    ),
    error => {
      if (error) {
        console.error(`${name}: ${error.message}`)
      } else {
        console.info(
          namespace
            ? `OK ${namespace}/${name} (${transformerType})`
            : `OK ${name} (${transformerType})`
        )
      }
    }
  )
}

fs.writeFile(
  './src/lib/generated/index.js',
  format(indexTemplate(regularFunctions)),
  error => {
    if (error) {
      console.error(`index: ${error.message}`)
    } else {
      console.info(`index OK`)
    }
  }
)
