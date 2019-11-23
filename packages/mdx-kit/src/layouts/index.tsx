import { withPrefix } from 'gatsby'
import { Link } from '../components/Link'
import { SiteConfig } from '../components/SiteConfig'
import { getTopLayout } from './TopLayout'
import { getLayout } from './LayoutBlog'
import { Brand } from './Brand'
import { SEO } from './Seo'
import theme from './theme'

// custom typefaces
import 'typeface-roboto'
import 'assets/prismjs/prism_clear.css'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default getTopLayout(theme)
export const Layout = getLayout(Link, SEO, Brand, SiteConfig.Org, withPrefix)
