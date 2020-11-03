import htmlparser2 from 'htmlparser2'
import domhandler from 'domhandler'

// parse the dom of a document
const getDom = text => {
  let dom
  const parser = new htmlparser2.Parser(
    new domhandler.DomHandler((error, dom_) => {
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

export default getDom
