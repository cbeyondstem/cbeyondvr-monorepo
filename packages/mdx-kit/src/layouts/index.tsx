import { TopLayout } from './TopLayout'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default TopLayout

export { Layout } from './Layout'
export { SEO } from './Seo'
