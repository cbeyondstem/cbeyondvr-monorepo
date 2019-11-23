/* eslint-disable @typescript-eslint/no-var-requires */
const globCB = require(`glob`)
const Promise = require(`bluebird`)
const _ = require(`lodash`)
const systemPath = require(`path`)
const slash = require('slash')

const { getAllMdx } = require('./getAllMdx')

const glob = Promise.promisify(globCB)

const watchDirectory = require('./watch-directory')

const myCreatePage = (filePath, slug, createPage) => {
  // Create page object
  console.log(`monitoring page at: /${systemPath.relative(systemPath.join(__dirname, '..'), filePath)}/`)
  const page = {
    path: slug,
    component: filePath
  }

  // Add page
  createPage(page)
}

// Path creator.
// Auto-create pages.
exports.createPagesStatefully = async ({ store, actions, reporter, graphql }, { path: pagesPath }, doneCb) => {
  const { createPage, deletePage } = actions
  const exts = 'md,mdx' // program.extensions.map(e => `${e.slice(1)}`).join(`,`)

  const pagesDirectory = systemPath.resolve(process.cwd(), pagesPath)
  const pagesGlob = `**/*.{${exts}}`

  // Get initial list of files.
  let files = await glob(pagesGlob, { cwd: pagesPath })
  const result = await getAllMdx(graphql)
  const mdxList = result.data.allMdx.edges
  files.forEach(file => {
    const searchPath = slash(systemPath.join(pagesDirectory, file))
    const edges = mdxList.filter(edge => edge.node.fileAbsolutePath === searchPath)
    if (edges.length === 0) {
      const mdxListPaths = mdxList.map(m => m.node.fileAbsolutePath)
      reporter.panic(
        `
        file ${searchPath}
        cannot be found in the list:\n ${JSON.stringify(mdxListPaths)}
        `
      )
    }
    const { route, slug } = edges[0].node.fields
    if (route) {
      return myCreatePage(edges[0].node.fileAbsolutePath, slug, createPage)
    }
    return null
  })

  watchDirectory(
    pagesPath,
    pagesGlob,
    async addedPath => {
      if (!_.includes(files, addedPath)) {
        const newResult = await getAllMdx(graphql)
        const newMdxList = newResult.data.allMdx.edges
        const searchPath = slash(systemPath.join(pagesDirectory, addedPath))
        const edges = newMdxList.filter(edge => edge.node.fileAbsolutePath === searchPath)
        if (edges.length === 0) {
          const mdxListPaths = mdxList.map(m => m.node.fileAbsolutePath)
          reporter.panic(
            `
            file ${searchPath}
            cannot be found in the list:\n ${JSON.stringify(mdxListPaths)}
            `
          )
        }
        const { route, slug } = edges[0].node.fields
        if (route) {
          myCreatePage(edges[0].node.fileAbsolutePath, slug, createPage)
          files.push(addedPath)
        }
      }
    },
    removedPath => {
      // Delete the page for the now deleted component.
      const componentPath = systemPath.join(pagesDirectory, removedPath)
      store.getState().pages.forEach(page => {
        if (systemPath.normalize(page.component) === componentPath) {
          deletePage({
            path: page.path,
            component: page.component
          })
        }
      })
      files = files.filter(f => f !== removedPath)
    },
    async changedPath => {
      console.log(changedPath)
      console.log(systemPath.normalize(systemPath.join(pagesDirectory, changedPath)))

      const newResult = await getAllMdx(graphql)
      const newMdxList = newResult.data.allMdx.edges
      const searchPath = slash(systemPath.join(pagesDirectory, changedPath))
      const edges = newMdxList.filter(edge => edge.node.fileAbsolutePath === searchPath)

      if (edges.length === 0) {
        const mdxListPaths = mdxList.map(m => m.node.fileAbsolutePath)
        reporter.panic(
          `
          file ${searchPath}
          cannot be found in the list:\n ${JSON.stringify(mdxListPaths)}
          `
        )
      } else if (!edges[0].node.fields) {
        return
      }
      const { route, slug } = edges[0].node.fields
      console.log(`${systemPath.normalize(systemPath.join(pagesDirectory, changedPath))} route=${route}`)
      if (route) {
        myCreatePage(edges[0].node.fileAbsolutePath, slug, createPage)
        files.push(changedPath)
      } else {
        // Delete the page for the now deleted component.
        const componentPath = systemPath.join(pagesDirectory, changedPath)
        store.getState().pages.forEach(page => {
          // console.log(`try to delete ${componentPath} with ${page.component}`)
          if (systemPath.normalize(page.component) === componentPath) {
            console.log(`deletePage ${slug}`)
            deletePage({
              path: page.path,
              component: page.component
            })
          }
        })
        files = files.filter(f => f !== changedPath)
      }
    }
  ).then(() => doneCb())
}
