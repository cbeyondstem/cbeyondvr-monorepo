import React from 'react'
import TopLayout from './src/layouts/TopLayout'

require('./prismjs/prism_clear.css')
// require('prismjs/themes/prism-solarizedlight.css')
require('prismjs/plugins/command-line/prism-command-line.css')
require('prismjs/plugins/toolbar/prism-toolbar')
require('prismjs/plugins/show-language/prism-show-language')
require('prismjs/plugins/line-numbers/prism-line-numbers')

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export, react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
