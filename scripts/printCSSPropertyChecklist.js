import fs from 'fs'
import { exit } from 'process'

const [, , file] = process.argv

fs.readFile(file, null, (error, data) => {
  if (error) {
    console.error(error)
    exit(1)
  }

  console.log(
    [...new Set(JSON.parse(data).map(({ property }) => property))]
      .map(property => `* [ ] ${property}`)
      .join('\n')
  )
})
