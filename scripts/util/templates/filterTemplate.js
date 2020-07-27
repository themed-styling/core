import valueTemplate from './valueTemplate.js'

export default ({ name, namespace, cssFunctionName, transformerType }) => {
  const namespaceValue = namespace ? `core.${namespace}` : 'core'

  const transformerName = `${transformerType}Transformer`
  const transformerImport = `import ${transformerName} from '../../util/transformers/${transformerName}'`

  return valueTemplate({
    nameValue: name,
    namespaceValue,
    makerFirstArgument: `'filter:${cssFunctionName}('`,
    makerTransformerArgument: transformerName,
    makerThirdArgument: `');'`,
    makerThirdArgumentImportant: `')!important;'`,
    utilFilePath: '../../util/',
    transformerImport,
  })
}
