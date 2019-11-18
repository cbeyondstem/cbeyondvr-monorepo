import * as React from 'react'
import { GetTopLayout } from './TopLayout'
import { Layout as LayoutWithBrand, LayoutProps } from './Layout'
import { Brand } from './Brand'
import theme from './theme'

// custom typefaces
import 'typeface-roboto'
import 'assets/prismjs/prism_clear.css'

// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default GetTopLayout(theme)

// eslint-disable-next-line react/jsx-props-no-spreading
export const Layout = (props: LayoutProps) => <LayoutWithBrand brand={<Brand />} {...props} />
export { GetTopLayout } from './TopLayout'
export { SEO } from './Seo'
