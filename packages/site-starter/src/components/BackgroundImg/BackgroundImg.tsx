import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

export interface BackgroundImgProps {
  portraitUrl: string
  landscapeUrl: string
  size: string
  repeat: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      backgroundRepeat: props => props.repeat,
      backgroundSize: props => props.size,
      backgroundImage: (props: BackgroundImgProps) => `url(${props.portraitUrl})`,
      '@media (orientation: landscape)': {
        backgroundImage: props => `url(${props.landscapeUrl})`
      }
    },
    content: {}
  })
)

// const useWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth)
//     }

//     window.addEventListener('resize', handleWindowResize)
//     return () => window.removeEventListener('resize', handleWindowResize)
//   }, [])

//   return windowWidth
// }

export const BackgroundImg = (props: BackgroundImgProps) => {
  // const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1>Cocoa Beans</h1>
        <p>They are good</p>
      </div>
    </div>
  )
}
