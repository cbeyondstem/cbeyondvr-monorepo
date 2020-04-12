import * as React from 'react'
import { withPrefix } from 'gatsby'
import { Link, SEO, getLayoutFromMenuItems as getLayout } from '@cbeyond/ui-kit'
import { Brand, Org } from './Brand'
import { TopLayout } from './TopLayout'
import { menuItems } from './menuItems'
// this layout is loaded by gatsby-plugin-layout
// we want to use this layout plugin for all layout context that must persist
// through the component mounting lifecyle
// see details at: https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
export default TopLayout
export const Layout = getLayout(Link, SEO, Brand, Org, menuItems, withPrefix)
export const primaryFont = 'Michroma'
export const secondaryFont = 'Montserrat'
export const renderHtml = (rawHTML: string, idx?: number, key?: string) =>
  React.createElement('div', {
    key,
    dangerouslySetInnerHTML: { __html: rawHTML },
    style: idx > 0 ? { fontFamily: secondaryFont, fontSize: '150%' } : null
  })
