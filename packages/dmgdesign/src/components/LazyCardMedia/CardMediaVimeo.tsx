import * as React from 'react'

import { CardMedia } from '@material-ui/core'

const CardMediaVimeo: React.FunctionComponent<React.ComponentPropsWithRef<'iframe'>> = props => {
  const { className, width, height } = props
  return (
    <CardMedia
      component="iframe"
      className={className}
      title="DMG Design SF - Project Portfolio"
      image="https://www.youtube.com/embed/eHNKhHiN8Yw?autoplay=1&muted=1&loop=1&enablejsapi=1"
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  )
}

export default CardMediaVimeo
