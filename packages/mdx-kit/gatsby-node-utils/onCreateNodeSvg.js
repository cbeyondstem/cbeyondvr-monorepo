/* eslint-disable @typescript-eslint/no-var-requires */
const SVGO = require('svgo')

async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
  const { createNode, createParentChildLink } = actions

  // Filter out non-pdf content
  if (node.internal.type !== 'File') {
    return
  }
  if (node.internal.mediaType !== `image/svg+xml`) {
    return
  }

  const content = await loadNodeContent(node)

  const svgNode = {
    id: createNodeId(`${node.id} >>> ${node.extension}`),
    children: [],
    parent: node.id,
    internal: {
      type: `svg`
    }
  }
  const svgo = new SVGO({
    multipass: true,
    floatPrecision: 2,
    plugins: [
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeXMLNS: true },
      { removeEditorsNSData: true },
      { cleanupAttrs: true },
      { inlineStyles: true },
      { minifyStyles: true },
      { convertStyleToAttrs: true },
      { cleanupIDs: true },
      { prefixIds: true },
      { removeRasterImages: true },
      { removeUselessDefs: true },
      { cleanupNumericValues: true },
      { cleanupListOfValues: true },
      { convertColors: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { convertShapeToPath: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { mergePaths: true },
      { removeUnusedNS: true },
      { sortAttrs: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeDimensions: true },
      { removeAttrs: false },
      { removeAttributesBySelector: false },
      { removeElementsByAttr: false },
      { addClassesToSVGElement: false },
      { removeStyleElement: false },
      { removeScriptElement: false },
      { addAttributesToSVGElement: false },
      { removeOffCanvasPaths: true },
      { reusePaths: true }
    ]
  })
  const { data: optimizedSVG } = await svgo.optimize(content)

  svgNode.content = optimizedSVG
  svgNode.path = node.relativePath
  svgNode.internal.contentDigest = createContentDigest(svgNode)
  createNode(svgNode)
  createParentChildLink({ parent: node, child: svgNode })
}

exports.onCreateNodeSvg = onCreateNode
