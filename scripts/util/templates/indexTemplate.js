export default functions =>
  functions
    .sort(({ name: nameA }, { name: nameB }) => {
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
    .map(({ name, namespace }) =>
      namespace
        ? `export { default as ${name} } from './${namespace}/${name}'`
        : `export { default as ${name} } from './${name}'`
    )
    .join('\n')
