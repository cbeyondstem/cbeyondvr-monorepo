import * as _ from 'lodash'
import * as React from 'react'
import { ImageSharpFluidFilterInput } from 'types/gatsby-graphql-types.d.ts'

/// <reference path="../../types/react-image-gallery.d.ts"/>
import ImageGallery, { ImageItemProps } from 'react-image-gallery'

import './image-gallery.css'

export interface CarouselProps {
  images: { path: string; img: ImageSharpFluidFilterInput }[]
  renderImage: (item: ImageItemProps) => React.ReactNode
}

export const Carousel: React.FunctionComponent<CarouselProps> = props => {
  const { images, renderImage } = props
  const [isFullScreen, setFullScreen] = React.useState(false)
  const imgItems: ImageItemProps[] = images.map(
    (item: { path: string; img: ImageSharpFluidFilterInput }) => ({
      original: item.img.originalImg,
    })
  )

  const onScreenChange = (fullScreenElement: Element) => {
    setFullScreen(fullScreenElement !== null)
  }

  return imgItems.length === 0 ? (
    <div />
  ) : (
    <ImageGallery
      // ref={i => this._imageGallery = i}
      items={imgItems}
      renderItem={renderImage}
      lazyLoad
      // onClick={this._onImageClick.bind(this)}
      // onImageLoad={this._onImageLoad}
      // onSlide={this._onSlide.bind(this)}
      // onPause={this._onPause.bind(this)}
      onScreenChange={onScreenChange}
      infinite
      showBullets={false}
      showFullscreenButton
      showThumbnails={false}
      showIndex
      showNav
      showPlayButton
      slideDuration={450}
      slideInterval={2000}

      // thumbnailPosition={this.state.thumbnailPosition}
      // slideDuration={parseInt(this.state.slideDuration)}
      // slideInterval={parseInt(this.state.slideInterval)}
      // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
      // additionalClass="app-image-gallery"
    />
  )
}
