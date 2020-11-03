import fetch from 'node-fetch'
import getDom from './getDom.mjs'
import find, { ofType, withName, withAttribute } from './find.mjs'

// clean up a value
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
    const dom = getDom(responseText)

    // get the heading for the formal syntax block
    const formalSyntaxHeadingNode = find
      .one(withAttribute('id').equaling('Formal_syntax'))
      .in(dom)

    // get the formal syntax block
    const preformattedTextNode = find
      .nextSibling(withName('pre'))
      .of(formalSyntaxHeadingNode)

    // get all text nodes, regardless of level (some are within an <a>)
    return find(ofType('text'))
      .in(preformattedTextNode.children)
      .map(({ data }) => purifyValueText(data))
      .filter(value => value) // remove empty strings
  }
  // todo add error handling
}

export default scrapeValues
