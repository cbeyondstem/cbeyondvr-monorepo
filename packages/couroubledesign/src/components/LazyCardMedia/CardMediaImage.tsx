import * as React from 'react'

import { CardMedia, useTheme } from '@material-ui/core'

import Img, { FluidObject } from 'gatsby-image'
import { ImageSharpFluid } from '../../types/gatsby-graphql-types'

export interface CardMediaImageProps extends React.ComponentPropsWithRef<'img'> {
  image: ImageSharpFluid
  title: string
}
const CardMediaImage: React.FunctionComponent<CardMediaImageProps> = props => {
  const { className, image, title } = props
  const fixItem: (img: ImageSharpFluid) => FluidObject = img => {
    const { aspectRatio = 1.5, src = '', srcSet = '', sizes = '', ...fluid } = img
    return { aspectRatio, src, srcSet, sizes, ...fluid }
  }
  const theme = useTheme()
  return (
    <CardMedia
      component={Img}
      className={className}
      src={null}
      fluid={fixItem(image)}
      title={title}
      alt={title}
      backgroundColor={theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}
      style={{
        margin: '0 auto' // Used to center the image
      }}
    />
  )
}

export default CardMediaImage
