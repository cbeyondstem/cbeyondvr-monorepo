import { withPrefix } from 'gatsby'
import { Link } from '../components/Link'
import { SiteConfig } from '../components/SiteConfig'
import { getLayout } from '../components/LayoutBlog'
import { Brand } from './Brand'
import { SEO } from '../components/SEO'
import { TopLayout } from './TopLayout'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default TopLayout
export const Layout = getLayout(Link, SEO, Brand, SiteConfig.Org, withPrefix)
