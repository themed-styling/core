export default functions =>
  functions
    .map(({ name, namespace }) =>
      namespace
        ? `export { default as ${name} } from './${namespace}/${name}'`
        : `export { default as ${name} } from './${name}'`
    )
    .join('\n')
