import * as React from 'react'
import { TypographyProps } from '@material-ui/core/Typography'
import { GatsbyLinkProps } from 'gatsby'

export interface ProviderProps {
  children: React.ReactNode
}

export interface LinkProps extends GatsbyLinkProps<any> {
  TypographyClasses?: TypographyProps['classes']
  underline?: 'none' | 'hover' | 'always'
}

export interface SEOProps {
  description?: string
  lang?: string
  meta?: string[]
  keywords?: string[]
  title: string
}

export interface PageProps {
  children?: React.ReactNode
  location: {
    pathname: string
  }
}
export interface LayoutProps extends SEOProps, PageProps {}

export interface HeaderLinkProps extends PageProps {
  onClick?: () => void
}
export interface MenuItem {
  name?: string
  path?: string
  path_ext?: string
  _path?: string // used to disable the path temporarily
  Icon?: string | React.FunctionComponent
  iconClass?: string
  dropdown?: MenuItem[]
  only?: 'authenticated' | 'unauthenticated'
  divider?: boolean
  popup?: boolean
}

export interface BrandProps {
  type: 'header' | 'footer'
}

export { ImageItemProps } from './react-image-gallery/imgItemProps'
