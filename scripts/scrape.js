import fetch from 'node-fetch'
import parser from 'node-html-parser'
import logUpdate from 'log-update'
import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig'

const { parse } = parser

const allowedStatuses = ['WD', 'CRD', 'CR', 'PR', 'REC']

// fetch an array of css properties from the w3c api and return their names without duplicates
const fetchPropertiesUnique = async () => {
  const response = await fetch(
    'https://www.w3.org/Style/CSS/all-properties.en.json'
  )

  if (response.ok && response.status === 200) {
    const properties = await response.json()

    return [
      ...new Set(
        properties
          .filter(({ status }) => allowedStatuses.includes(status))
          .map(({ property }) => property)
      ),
    ]
  }
  // todo add error handling
}

const getFirst = tagName => ({
  after: nodes => ({
    in: nodeList => {
      for (const node of nodes) {
        const nodeIndex = nodeList.indexOf(node)
        if (nodeIndex !== -1) {
          return nodeList
            .slice(nodeIndex)
            .filter(childNode => childNode.rawTagName === tagName)[0]
        }
      }
    },
  }),
})

// get the leaf tag of type tagName from a tree node
const getInnerMost = tagName => ({
  of: node => {
    let current = node
    while (current) {
      const next = current.querySelector(tagName)
      if (!next) {
        return current
      }
      current = next
    }
  },
})

// remove unnecessary characters
const purifyValueText = valueText => {
  return valueText
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/('|")/g, '')
}

// ids of heading nodes that are before the value list or table
const headingNodeSelectors = ['#Values', '#Syntax', '#Usage_notes']

// scrape and return legal values of a css property from its mdn article
const scrapePropertyValues = async cssProperty => {
  // hit mdn
  const response = await fetch(
    `https://developer.mozilla.org/en-US/docs/Web/CSS/${cssProperty}`
  )

  if (response.ok && response.status === 200) {
    const responseText = await response.text()
    // parse html
    const root = parse(responseText)
    // get main content
    const articleNode = root.querySelector('#wikiArticle')
    // get headings that mark value chapters
    const headingNodes = headingNodeSelectors.map(selector =>
      articleNode.querySelector(selector)
    )
    // get the first description list after one of the marker heading
    const descriptionListNode = getFirst('dl')
      .after(headingNodes)
      .in(articleNode.childNodes)

    // sometimes it's a table
    if (!descriptionListNode) {
      // get first table after one of the marker headings
      const tableNode = getFirst('table')
        .after(headingNodes)
        .in(articleNode.childNodes)

      // read text of <tr><td><code>text</code><td>...</tr> (every first <code> of each <tr> in the table)
      return tableNode
        .querySelectorAll('tr')
        .map(tableRowNode => tableRowNode.querySelector('code')?.rawText)
        .filter(text => text)
    }

    // read the text of <code>...<dt><code>text</code></dt>...</code>
    return descriptionListNode.childNodes
      .filter(childNode => childNode.rawTagName === 'dt')
      .map(
        descriptionTermNode =>
          getInnerMost('code').of(descriptionTermNode).rawText
      )
  }
  // todo add error handling
}

const emoji = {
  fetch: '🔄',
  scrape: '⛏️ ',
  error: '⚠️ ',
  write: '💾',
  done: '✅',
}

const progressBarLenght = 50
const progressBar = ratio => {
  const progressLength = Math.floor(ratio * progressBarLenght)
  return `[${new Array(progressLength).fill('=').join('')}${new Array(
    progressBarLenght - progressLength
  )
    .fill(' ')
    .join('')}] ${Math.floor(ratio * 100)}%`
}

logUpdate(`
${emoji.fetch} Fetching properties...
`)
const propertyStrings = await fetchPropertiesUnique()
// const properties_ = ['padding', 'margin']
logUpdate(`
${emoji.fetch} Fetching properties... Done.
`)
logUpdate.done()

// map all properties to an object with its name and purified values
let progress = 0
const properties = await Promise.all(
  propertyStrings.map(async name => {
    try {
      const values = await scrapePropertyValues(name)

      return {
        name,
        values: values.map(value => purifyValueText(value)),
      }
    } catch (error) {
      logUpdate(`${emoji.error} ${name}: ${error.message}`)
      logUpdate.done()

      return {
        name,
      }
    } finally {
      progress++
      logUpdate(`
${emoji.scrape} Scraping property values (${progress}/${propertyStrings.length})
${progressBar(progress / propertyStrings.length)}
`)
    }
  })
)
logUpdate.done()

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

logUpdate(`${emoji.done} Done.
`)
logUpdate.done()
