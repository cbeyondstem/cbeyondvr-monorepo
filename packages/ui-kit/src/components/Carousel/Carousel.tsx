import * as _ from 'lodash'
import * as React from 'react'

import ImageGallery, { ImageItemProps } from 'react-image-gallery'

import '../../assets/image-gallery.css'

import { style } from 'typestyle'
import * as csx from 'csx'
import {
  ImageSharpFluidFilterInput,
  ImageSharpFixedFilterInput,
} from '../../types/gatsby-graphql-types'

export interface CarouselProps {
  images: {
    path: string
    img: ImageSharpFluidFilterInput
    thumb: string
  }[]
  renderImage?: (item: ImageItemProps) => React.ReactNode
}

export const Carousel: React.FunctionComponent<CarouselProps> = props => {
  const { images, renderImage } = props
  const [isFullScreen, setFullScreen] = React.useState(false)
  const imgItems: ImageItemProps[] = images.map(
    (item: {
      path: string
      img: ImageSharpFluidFilterInput
      thumb: string
    }) => ({
      original: item.img,
      thumbnail: item.thumb,
    })
  )

  const onScreenChange = (fullScreenElement: Element) => {
    setFullScreen(fullScreenElement !== null)
  }

  return imgItems.length === 0 ? (
    <div />
  ) : (
    <ImageGallery
      className={style({ maxHeight: csx.important('80%') })}
      // ref={i => this._imageGallery = i}
      items={imgItems}
      renderItem={renderImage}
      // renderThumbInner={renderImage}
      lazyLoad
      // onClick={this._onImageClick.bind(this)}
      // onImageLoad={this._onImageLoad}
      // onSlide={this._onSlide.bind(this)}
      // onPause={this._onPause.bind(this)}
      onScreenChange={onScreenChange}
      infinite
      showBullets={false}
      showFullscreenButton={false}
      showThumbnails
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
