/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

function getMdxLayout(layout) {
  return path.resolve(__dirname, `../templates/${layout}.jsx`)
}
exports.getMdxLayout = getMdxLayout
