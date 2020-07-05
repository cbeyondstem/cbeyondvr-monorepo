import * as React from 'react'
import { CarouselProps } from '../../ui/Carousel'

export const {
  Consumer: AllImgConsumer,
  Provider: AllImgProvider,
} = React.createContext({
  images: [],
} as CarouselProps)
