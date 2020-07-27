import valueTemplate from './valueTemplate.js'

export default ({ name, namespace, cssFunctionName, transformerType }) =>
  valueTemplate({
    nameValue: name,
    namespaceValue: 'core.transform',
    makerFirstArgument: `'transform:${cssFunctionName}('`,
    makerTransformerArgument: `${transformerType}Transformer`,
    makerThirdArgument: `');'`,
    makerThirdArgumentImportant: `')!important;'`,
    utilFilePath: '../../util/',
    transformerImport: `import ${transformerType}Transformer from '../../util/transformers/${transformerType}Transformer'`,
  })
