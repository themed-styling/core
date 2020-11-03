import logUpdate from 'log-update'
import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'
import scrapeProperties from './util/scrapeProperties.mjs'
import scrapeValues from './util/scrapeValues.mjs'

const emoji = {
  fetch: '🔄',
  scrape: '⛏️ ',
  error: '⚠️ ',
  write: '💾',
  done: '✅',
}

const progressBarLength = 50
const progressBar = ratio => {
  const progressLength = Math.floor(ratio * progressBarLength)
  return `[${new Array(progressLength).fill('=').join('')}${new Array(
    progressBarLength - progressLength
  )
    .fill(' ')
    .join('')}] ${Math.floor(ratio * 100)}%`
}

// scrape properties and their statuses
logUpdate(`
${emoji.fetch} Fetching properties...
`)
const scrapedProperties = await scrapeProperties()
logUpdate(`
${emoji.fetch} Fetching properties... Done.
`)
logUpdate.done()

// map all properties to an object with their name, status and values
let progress = 0
const properties = await Promise.all(
  scrapedProperties.map(async property => {
    try {
      const values = await scrapeValues(property.property)

      return {
        ...property,
        values,
      }
    } catch (error) {
      logUpdate(`${emoji.error} ${property.property}: ${error.message}`)
      logUpdate.done()

      return property
    } finally {
      progress++
      logUpdate(`
${emoji.scrape} Scraping property values (${progress}/${
        scrapedProperties.length
      })
${progressBar(progress / scrapedProperties.length)}
`)
    }
  })
)
logUpdate.done()

// save to resources/properties.json
logUpdate(`${emoji.write} Saving file...
`)
fs.writeFileSync(
  'resources/properties.json',
  prettier.format(JSON.stringify(properties), {
    ...prettierConfig,
    parser: 'json',
  })
)
logUpdate(`${emoji.write} Saving file... Done.
`)
logUpdate.done()

// done
logUpdate(`${emoji.done} Done.
`)
logUpdate.done()
