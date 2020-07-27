export default ({
  nameValue,
  namespaceValue,
  makerFirstArgument,
  makerTransformerArgument,
  makerThirdArgument,
  makerThirdArgumentImportant,
  utilFilePath,
  transformerImport,
}) => {
  return `import valueConstructor from '${utilFilePath}constructors/valueConstructor'
import valueMaker from '${utilFilePath}makers/valueMaker'
import calcValueMaker from '${utilFilePath}makers/calcValueMaker'
${transformerImport}

/**
 * Returns a function that takes an object containing <code>${nameValue}</code> and <code>theme</code> properties.
 *
 * This function is meant to be used with styled-components within your
 * component's template literal.
 *
 * @type {coreFunction}
 * @name ${nameValue}
 * @memberOf ${namespaceValue}
 */

export default fallback => {
  const fn = ({ theme, ...props }) =>
    valueConstructor(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      theme,
      fn.doCalc_
        ? calcValueMaker(
            ${makerFirstArgument},
            ${makerTransformerArgument},
            fn.calc_,
            fn.important_ ? ${makerThirdArgumentImportant} : ${makerThirdArgument}
          )
        : valueMaker(
            ${makerFirstArgument},
            ${makerTransformerArgument},
            fn.important_ ? ${makerThirdArgumentImportant} : ${makerThirdArgument}
          )
    )
  fn.propless_ = false
  fn.propless = () => {
    fn.propless_ = true
    return fn
  }
  fn.l = fn.propless

  fn.propName_ = '${nameValue}'
  fn.propName = propName => {
    fn.propName_ = propName
    return fn
  }
  fn.p = fn.propName

  fn.important_ = false
  fn.important = () => {
    fn.important_ = true
    return fn
  }
  fn.i = fn.important

  fn.calc_ = undefined
  fn.doCalc_ = false
  fn.calc = calc => {
    fn.calc_ = calc
    fn.doCalc_ = true
    return fn
  }
  fn.c = fn.calc

  return fn
}
`
}
