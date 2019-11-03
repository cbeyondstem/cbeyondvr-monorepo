/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
// custom typefaces
import 'typeface-michroma'
import 'typeface-roboto'

const { siteMetadata } = require('./gatsby-config')

if (siteMetadata.mdx) {
  require('@cbeyond/mdx-kit/src/assets/prismjs/prism_clear.css')
  // require('prismjs/themes/prism-solarizedlight.css')
  require('prismjs/plugins/command-line/prism-command-line.css')
  require('prismjs/plugins/toolbar/prism-toolbar')
  require('prismjs/plugins/show-language/prism-show-language')
  require('prismjs/plugins/line-numbers/prism-line-numbers')
}
