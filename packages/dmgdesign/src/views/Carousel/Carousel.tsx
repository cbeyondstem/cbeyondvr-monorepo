import * as _ from 'lodash'
import * as React from 'react'
import Img from 'gatsby-image'
import { style } from 'typestyle'

import { ImageSharpFluidFilterInput } from 'types/gatsby-graphql-types.d.ts'
import { ImgProvider } from 'components/ImgProvider'
import { Carousel as CarouselBase } from '@cbeyond/ui-kit/src/components/Carousel'

/// <reference path="../../types/react-image-gallery.d.ts"/>
import { ImageItemProps } from 'react-image-gallery'

export interface CarouselViewProps {
  path: string
}

export const Carousel: React.FunctionComponent<CarouselViewProps> = props => {
  const { path } = props
  const renderImage = (item: ImageItemProps) => (
    <Img
      fluid={item.original}
      className={style({
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      })}
    />
  )

  return (
    <ImgProvider.Consumer>
      {({ images }) => {
        const viewImages = images.filter(img => img.path.search(path) > -1)
        return <CarouselBase images={viewImages} renderImage={renderImage} />
      }}
    </ImgProvider.Consumer>
  )
}
