import * as React from 'react'
import { TypographyProps } from '@material-ui/core/Typography'
import { GatsbyLinkProps } from 'gatsby'

export interface LinkProps extends GatsbyLinkProps<any> {
  TypographyClasses?: TypographyProps['classes']
  underline?: 'none' | 'hover' | 'always'
}

export const Link: React.FunctionComponent<LinkProps>
