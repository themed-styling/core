import valueTemplate from './valueTemplate.js'

export default ({ name, namespace, transformerType }) => {
  const namespaceValue = namespace ? `core.${namespace}` : 'core'

  const cssAttribute = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  const transformerName = `${transformerType}Transformer`

  const utilFilePath = namespace ? '../../util/' : '../util/'
  const transformerImport = `import ${transformerName} from '${utilFilePath}transformers/${transformerName}'`

  return valueTemplate({
    nameValue: name,
    namespaceValue,
    makerFirstArgument: `'${cssAttribute}:'`,
    makerTransformerArgument: transformerName,
    makerThirdArgument: `';'`,
    makerThirdArgumentImportant: `'!important;'`,
    utilFilePath,
    transformerImport,
  })
}
