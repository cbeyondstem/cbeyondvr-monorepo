import * as _ from 'lodash'
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdge } from '@cbeyond/ui-kit/dist/types/gatsby-graphql-types'
import { ProviderProps, CarouselImgProps, AllImgProvider } from '@cbeyond/ui-kit'

export const query = graphql`
  fragment ImgResponsiveDesktop on ImageSharp {
    fluid(quality: 100, maxHeight: 600, maxWidth: 1200, fit: CONTAIN, background: "#2d2d2d") {
      ...GatsbyImageSharpFluid_withWebp_noBase64
    }
  }
  fragment ImgResponsiveDesktop2 on ImageSharp {
    fluid(quality: 100, fit: COVER, srcSetBreakpoints: [600, 800, 1200, 1600, 2600]) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  fragment ImgResponsiveMobile on ImageSharp {
    fluid(quality: 100, background: "#2d2d2d") {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
  fragment ImgResponsiveMobile2 on ImageSharp {
    fluid(quality: 100, maxWidth: 380, fit: COVER, srcSetBreakpoints: [200, 370]) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  fragment Thumbnails on ImageSharp {
    fixed(quality: 100, fit: COVER, cropFocus: CENTER, width: 75, height: 50) {
      src
      srcWebp
    }
  }
`

export const AllImgQueryProvider: React.FunctionComponent<ProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: allFile(filter: { sourceInstanceName: { eq: "img_landscape" } }) {
            edges {
              node {
                sourceInstanceName
                relativePath
                childImageSharp {
                  ...ImgResponsiveDesktop2
                  ...Thumbnails
                }
              }
            }
          }
          mobile: allFile(filter: { sourceInstanceName: { eq: "img_portrait" } }) {
            edges {
              node {
                sourceInstanceName
                relativePath
                childImageSharp {
                  ...ImgResponsiveMobile2
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images: CarouselImgProps[] = []
        data.desktop.edges.forEach((edge: FileEdge) => {
          const desktop = _.get(edge, 'node.childImageSharp.fluid', null)
          const thumb = _.get(edge, 'node.childImageSharp.fixed.src', null)
          const sourceInstanceName = _.get(edge, 'node.sourceInstanceName', '')
          let path = _.get(edge, 'node.relativePath', '')
          const mobileEdges = data.mobile.edges.filter((e: FileEdge) => path === _.get(e, 'node.relativePath', ''))
          let mobile
          if (mobileEdges.length > 0) {
            mobile = _.get(mobileEdges[0], 'node.childImageSharp.fluid', null)
          }
          path = `${sourceInstanceName}/${path}`
          if (desktop) {
            images.push({ path, desktop, mobile, thumb })
          }
        })
        return (
          <AllImgProvider
            value={{
              images
            }}
          >
            {children}
          </AllImgProvider>
        )
      }}
    />
  )
}
