import valueTemplate from './valueTemplate.js'

export default ({ name, namespace, cssFunctionName, transformerType }) =>
  valueTemplate({
    nameValue: name,
    namespaceValue: 'core.filter',
    makerFirstArgument: `'filter:${cssFunctionName}('`,
    makerTransformerArgument: `${transformerType}Transformer`,
    makerThirdArgument: `');'`,
    makerThirdArgumentImportant: `')!important;'`,
    utilFilePath: '../../util/',
    transformerImport: `import ${transformerType}Transformer from '../../util/transformers/${transformerType}Transformer'`,
  })
