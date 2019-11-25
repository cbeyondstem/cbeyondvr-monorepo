import { withPrefix } from 'gatsby'
import { Link, SEO, SiteConfig, getLayoutFromMenuItems as getLayout } from '@cbeyond/ui-kit'
import { Brand } from './Brand'
import { TopLayout } from './TopLayout'
import { menuItems } from './menuItems'
// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default TopLayout
export const Layout = getLayout(Link, SEO, Brand, SiteConfig.Org, menuItems, withPrefix)
