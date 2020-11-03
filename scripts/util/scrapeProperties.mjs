import fetch from 'node-fetch'
import getDom from './getDom.mjs'
import find, { withName, withAttribute, withAll } from './find.mjs'

// get the property from a <td>
const getProperty = node =>
  find.one(withName('a')).in(node.children).children[0].data.trim()

// get a status from a <td>
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

// scrape a section div with the given id
const scrapeSection = id => ({
  in: nodeList => {
    // find section
    const section = find
      .one(withAll(withName('div'), withAttribute('id').equaling(id)))
      .in(nodeList)
    // get the first table
    const table = find.one(withName('table')).in(section.children)

    return scrapePropertyTable(table)
  },
})

const allStatuses = ['REC', 'PR', 'CR', 'CRD', 'WD', 'FPWD', 'ED']
const getHighestStatus = statuses => {
  for (const status of allStatuses) {
    if (statuses.includes(status)) {
      return status
    }
  }
  return statuses[0]
}

// read css properties from the html document and return their names without duplicates
const scrapeProperties = async () => {
  const response = await fetch(
    'https://www.w3.org/Style/CSS/all-properties.en.html'
  )

  if (response.ok && response.status === 200) {
    const responseText = await response.text()
    const dom = getDom(responseText)

    const scraped = [
      ...scrapeSection('list').in(dom),
      ...scrapeSection('other').in(dom),
    ].filter(({ property }) => !/[A-Z]/g.test(property)) // remove pascalCased properties to avoid duplicates

    // gather all statuses of a property from different documents
    const map = new Map()
    for (const { property, status } of scraped) {
      if (map.has(property)) {
        map.get(property).push(status)
        continue
      }
      map.set(property, [status])
    }

    return [...map.entries()].map(([property, statuses]) => ({
      property,
      statuses,
      status: getHighestStatus(statuses),
    }))
  }
  // todo add error handling
}

export default scrapeProperties
