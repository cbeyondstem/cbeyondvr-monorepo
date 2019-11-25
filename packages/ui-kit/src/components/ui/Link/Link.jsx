/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import MuiLink from '@material-ui/core/Link'
// import { TypographyProps } from '@material-ui/core/Typography'
import { Link as GatsbyLink } from 'gatsby'

// export interface LinkProps extends GatsbyLinkProps<any> {
//   TypographyClasses?: TypographyProps['classes']
//   underline?: 'none' | 'hover' | 'always'
// }
export const Link = React.forwardRef((props, ref) => <MuiLink ref={ref} component={GatsbyLink} {...props} />)
