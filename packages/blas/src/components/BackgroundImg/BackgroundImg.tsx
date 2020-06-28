import React, { useState, useEffect } from 'react'
import desktopImage from '../assets/stories/themePic.jpg'
import mobileImage from '../assets/stories/BeanToBar.jpg'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return windowWidth
}

export const BackgroundImg = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <h1>Cocoa Beans</h1>
        <p>They are good</p>
      </div>
    </div>
  )
}
