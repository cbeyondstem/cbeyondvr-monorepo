import * as _ from 'lodash'
import * as React from 'react'

import ImageGallery from 'react-image-gallery'

import { style } from 'typestyle'
import * as csx from 'csx'
import { ImageItemProps } from '../../../types/interfaces'
import { ImageSharpFluid } from '../../../types/gatsby-graphql-types'
import { SvgProps } from '../../content/AllSvg'

export interface CarouselImgProps {
  path: string
  desktop: ImageSharpFluid | SvgProps
  mobile?: ImageSharpFluid
  thumb: string
  title?: string
  caption?: string
}
export interface CarouselProps {
  images: CarouselImgProps[]
  maxWidth?: number
  renderImage?: (item: ImageItemProps) => React.ReactNode
  thumb?: boolean
  showPlayButton?: boolean
  autoplay?: boolean
}

export const Carousel: React.FunctionComponent<CarouselProps> = props => {
  const {
    images,
    renderImage,
    thumb = true,
    showPlayButton = true,
    autoplay = true,
  } = props
  const [isFullScreen, setFullScreen] = React.useState(false)
  const imgItems: ImageItemProps[] = images.map(
    (item: {
      path: string
      desktop: ImageSharpFluid
      mobile?: ImageSharpFluid
      thumb: string
    }) => ({
      original: item,
      thumbnail: item.thumb,
      originalTitle: item.path,
      description: item.path,
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
      autoPlay={autoplay}
      // renderThumbInner={renderImage}
      // lazyLoad
      // onClick={this._onImageClick.bind(this)}
      // onImageLoad={this._onImageLoad}
      // onSlide={this._onSlide.bind(this)}
      // onPause={this._onPause.bind(this)}
      onScreenChange={onScreenChange}
      infinite
      showBullets={false}
      showFullscreenButton={false}
      showThumbnails={thumb}
      showIndex
      showNav
      showPlayButton={showPlayButton}
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
