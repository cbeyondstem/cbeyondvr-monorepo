import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { useTheme } from '@material-ui/core/styles'
import { Theme, useMediaQuery } from '@material-ui/core'
import Img, { FluidObject } from 'gatsby-image'
import { ImageSharpFluid } from '../types/gatsby-graphql-types'

export const Designer: React.FunctionComponent<React.ComponentPropsWithRef<'div'>> = props => {
  const theme = useTheme()
  const fixItem: (img: ImageSharpFluid) => FluidObject = img => {
    const { aspectRatio = 1.5, src = '', srcSet = '', sizes = '', ...fluid } = img
    return { aspectRatio, src, srcSet, sizes, ...fluid }
  }
  const designer = 'Sabrina Galzebrook'
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "Sabrina2.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 800, fit: CONTAIN) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        const sources = fixItem(imageData)
        return (
          <Img
            // className={classes.img}
            fluid={sources}
            title={designer}
            alt={designer}
            backgroundColor={theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}
            style={{
              margin: md ? '0' : '0 auto', // Used to center the image
              maxWidth: md ? '25vw' : '100vw'
            }}
          />
        )
      }}
    />
  )
}
