/* eslint-disable @typescript-eslint/no-var-requires */
const { getMdxLayout } = require('./getMdxLayout')
const { onCreateNodeMdx } = require('./onCreateNodeMdx')
const { onCreateNodeSvg } = require('./onCreateNodeSvg')
const { getAllMdx } = require('./getAllMdx')

exports.getAllMdx = getAllMdx
exports.getMdxLayout = getMdxLayout
exports.onCreateNode = async p => {
  await onCreateNodeMdx(p)
  await onCreateNodeSvg(p)
}
