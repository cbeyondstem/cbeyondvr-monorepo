import * as React from 'react'
import { withPrefix } from 'gatsby'
import { SiteConfig, SEO } from '@cbeyond/mdx-kit/src'
import { Link } from '@cbeyond/mdx-kit/src/components/Link'
import { getLayoutFromMenuItems as getLayout } from '@cbeyond/ui-kit/src'
import { getTopLayout } from './TopLayout'
import { Brand } from './Brand'
import { menuItems } from './menuItems'
import theme from './theme'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default getTopLayout(theme)
export const Layout = getLayout(Link, SEO, Brand, () => <span>DMGDesign</span>, menuItems, withPrefix)
