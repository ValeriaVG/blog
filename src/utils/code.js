import React from 'react'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light'
import js from 'react-syntax-highlighter/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { prism } from 'react-syntax-highlighter/styles/prism'

registerLanguage('js', js)
registerLanguage('jsx', jsx)

const Code = props => (
  <SyntaxHighlighter language="js" style={prism} {...props} />
)
export default Code
