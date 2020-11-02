import fetch from 'node-fetch'
import logUpdate from 'log-update'
import fs from 'fs'
import prettier from 'prettier'
import { Parser } from 'htmlparser2'
import { DomHandler } from 'domhandler'
import {
  find as find_,
  findAll,
  findOne,
  getAttributeValue,
  nextElementSibling,
} from 'domutils'

const find = (test, options = { recurse: true }) => ({
  in: nodes => find_(test, nodes, options),
})
find.all = (test, options) => ({
  in: nodes => findAll(test, nodes, options),
})
find.one = (test, options) => ({
  in: nodes => findOne(test, nodes, options),
})
find.nextSibling = test => ({
  of: node => {
    let sibling = nextElementSibling(node)
    while (sibling) {
      if (test(sibling)) {
        return sibling
      }
      sibling = nextElementSibling(sibling)
    }
    logUpdate.done()
    return sibling
  },
})

const ofType = type => ({ type: nodeType }) => nodeType === type
const withName = name => ({ name: nodeName }) => nodeName === name
const withAttribute = attribute => ({
  equaling: value => node => getAttributeValue(node, attribute) === value,
})

const withAll = (...tests) => node => {
  for (const test of tests) {
    if (!test(node)) {
      return false
    }
  }
  return true
}

import prettierConfig from './util/prettierConfig.js'

const allowedStatuses = ['WD', 'CRD', 'CR', 'PR', 'REC']

const getProperty = node =>
  findOne(({ name }) => name === 'a', node.children).children[0].data.trim()

const getStatus = node => node.children[0].data.trim()

// map <tr>...<td>...property...<td>...<td>status</td></tr> -> { property, status }
const scrapePropertyTable = table =>
  find
    .all(withName('tr'))
    .in(table.children)
    .map(tableRowNode => {
      const [, propertyTableDataNode, , statusTableDataNode] = find
        .all(withName('td'))
        .in(tableRowNode.children)

      return {
        property: getProperty(propertyTableDataNode),
        status: getStatus(statusTableDataNode),
      }
    })

const scrapeSection = id => ({
  in: nodeList => {
    // find section
    const section = findOne(
      withAll(withName('div'), withAttribute('id').equaling(id)),
      nodeList
    )
    // get the first table
    const table = findOne(withName('table'), section.children)

    return scrapePropertyTable(table)
  },
})

const getDom = text => {
  let dom
  const parser = new Parser(
    new DomHandler((error, dom_) => {
      if (error) {
        throw error
      }
      dom = dom_
    })
  )
  parser.write(text)
  parser.end()
  return dom
}

// read css properties from the html document and return their names without duplicates
const scrapeProperties = async () => {
  const response = await fetch(
    'https://www.w3.org/Style/CSS/all-properties.en.html'
  )

  if (response.ok && response.status === 200) {
    const responseText = await response.text()

    const dom = getDom(responseText)

    return [
      ...new Set(
        [...scrapeSection('list').in(dom), ...scrapeSection('other').in(dom)]
          .filter(
            ({ property, status }) =>
              !/[A-Z]/g.test(property) && allowedStatuses.includes(status)
          )
          .map(({ property }) => property)
      ),
    ]
  }
  // todo add error handling
}

// remove unnecessary characters
const purifyValueText = valueText =>
  valueText
    .trim()
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/['"]/gi, '')

// scrape and return legal values of a css property from its mdn article
const scrapeValues = async cssProperty => {
  // hit mdn
  const response = await fetch(
    `https://developer.mozilla.org/en-US/docs/Web/CSS/${cssProperty}`
  )

  if (response.ok && response.status === 200) {
    const responseText = await response.text()
    // parse html
    const dom = getDom(responseText)
    const formalSyntaxHeadingNode = find
      .one(withAttribute('id').equaling('Formal_syntax'))
      .in(dom)

    const preformattedTextNode = find
      .nextSibling(withName('pre'))
      .of(formalSyntaxHeadingNode)

    return find(ofType('text'))
      .in(preformattedTextNode.children)
      .map(({ data }) => purifyValueText(data))
      .filter(
        value =>
          value /* &&
          ![
            "'",
            '"',
            '[',
            ']',
            '{',
            '}',
            '|',
            '?',
            '#',
            ',',
            '=',
            '/',
            '+',
            '*',
          ].includes(value) */
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
