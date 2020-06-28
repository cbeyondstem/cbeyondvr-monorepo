import * as React from 'react'

import { CardMedia } from '@material-ui/core'

const CardMediaVimeo: React.FunctionComponent<React.ComponentPropsWithRef<'iframe'>> = props => {
  const { className, width, height } = props
  return (
    <CardMedia
      component="iframe"
      className={className}
      title="Bean To Bar"
      image="https://player.vimeo.com/video/431678595?byline=false&portrait=false&title=false&fun=false&texttrack=false&autoplay=true&muted=true&loop=1"
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  )
}

export default CardMediaVimeo
