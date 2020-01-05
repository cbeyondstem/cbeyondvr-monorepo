// https://www.gatsbyjs.org/packages/gatsby-background-image/
// need to polyfill intersection observer to support Safari properly for lazy load of images

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
