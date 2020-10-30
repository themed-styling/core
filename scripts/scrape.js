import fetch from 'node-fetch'
import parser from 'node-html-parser'
import logUpdate from 'log-update'
import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'

const { parse } = parser

const allowedStatuses = ['WD', 'CRD', 'CR', 'PR', 'REC']

const getInnermostText = node => {
  let node_ = node
  while (node_.childNodes.length > 0) {
    node_ = node_.childNodes[0]
  }
  return node_.rawText.trim()
}

const readPropertyTable = table =>
  table
    .querySelector('tbody')
    .querySelectorAll('tr')
    .map(({ childNodes }) => {
      const [
        ,
        propertyTableDataNode,
        ,
        statusTableDataNode,
      ] = childNodes.filter(({ rawTagName }) => rawTagName)

      return {
        property: getInnermostText(propertyTableDataNode),
        status: getInnermostText(statusTableDataNode),
      }
    })

// read css properties from the html document and return their names without duplicates
const scrapeProperties = async () => {
  const documentText = fs.readFileSync('resources/Index-of-CSS-properties.html')

  const root = parse(documentText, {
    blockTextElements: true,
  })

  const list = readPropertyTable(
    root.querySelector('#list').querySelector('table')
  )
  const other = readPropertyTable(
    root.querySelector('#other').querySelector('table')
  )

  const properties = [...list, ...other]

  return [
    ...new Set(
      properties
        .filter(
          ({ property, status }) =>
            allowedStatuses.includes(status) && !/[A-Z]/g.test(property)
        )
        .map(({ property }) => property)
    ),
  ]
}

// return the first node of type 'tagName' that occurs after one of 'nodes' in 'nodeList'
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

// remove unnecessary characters
const purifyValueText = valueText => {
  const indexOfClosing = valueText.indexOf('">')

  let purified = valueText
  if (indexOfClosing !== -1) {
    purified = valueText.substring(indexOfClosing + 2)
  }

  return purified.trim().replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
  // .replace(/['"\[\]\|{}?#,0-9]/gi, '')
}

// scrape and return legal values of a css property from its mdn article
const scrapeValues = async cssProperty => {
  // hit mdn
  const response = await fetch(
    `https://developer.mozilla.org/en-US/docs/Web/CSS/${cssProperty}`
  )

  if (response.ok && response.status === 200) {
    const responseText = await response.text()
    // parse html
    const root = parse(responseText, { blockTextElements: true })
    // get main content
    const articleNode = root.querySelector('#wikiArticle')

    // get the first preformatted text node after a heading with id 'Formal_syntax'
    const preformattedTextNode = getFirst('pre')
      .after([articleNode.querySelector('#Formal_syntax')])
      .in(articleNode.childNodes)

    // only need child node's contents
    return preformattedTextNode.childNodes
      .map(({ rawText }) => purifyValueText(rawText))
      .filter(
        value =>
          value &&
          !["'", '"', '[', ']', '{', '}', '|', '?', '#', ','].includes(value)
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

const progressBarLength = 50
const progressBar = ratio => {
  const progressLength = Math.floor(ratio * progressBarLength)
  return `[${new Array(progressLength).fill('=').join('')}${new Array(
    progressBarLength - progressLength
  )
    .fill(' ')
    .join('')}] ${Math.floor(ratio * 100)}%`
}

logUpdate(`
${emoji.fetch} Fetching properties...
`)
const propertyStrings = await scrapeProperties()
// const propertyStrings = ['margin']
logUpdate(`
${emoji.fetch} Fetching properties... Done.
`)
logUpdate.done()

// map all properties to an object with their name and values
let progress = 0
const properties = await Promise.all(
  propertyStrings.map(async name => {
    try {
      const values = await scrapeValues(name)

      return {
        name,
        values,
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
