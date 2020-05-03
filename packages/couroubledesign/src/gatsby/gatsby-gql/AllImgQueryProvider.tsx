import * as _ from 'lodash'
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdge } from '@cbeyond/ui-kit/dist/types/gatsby-graphql-types'
import { ProviderProps, CarouselImgProps, AllImgProvider } from '@cbeyond/ui-kit'
import { imageInfoDict, projects, services } from '../../assets/image-list'

export const query = graphql`
  fragment ImgResponsiveDesktop on ImageSharp {
    fluid(quality: 100, maxHeight: 600, maxWidth: 1200, fit: CONTAIN, background: "#2d2d2d") {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  fragment ImgResponsiveDesktop2 on ImageSharp {
    fluid(
      quality: 100
      fit: COVER
      srcSetBreakpoints: [200, 370, 600, 800, 1200]
      sizes: "(max-width: 1200px) 100vw, 1200px"
    ) {
      ...GatsbyImageSharpFluid_withWebp
      presentationWidth
    }
  }
  fragment ImgResponsiveMobile on ImageSharp {
    fluid(quality: 100, background: "#2d2d2d") {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  fragment ImgResponsiveMobile2 on ImageSharp {
    fluid(
      quality: 100
      maxWidth: 380
      fit: COVER
      srcSetBreakpoints: [200, 370]
      sizes: "(max-width: 1200px) 100vw, 1200px"
    ) {
      ...GatsbyImageSharpFluid_withWebp
      presentationWidth
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
  const allProjects = projects.concat(services)
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
          const fname = _.get(edge, 'node.relativePath', '')
          const mobileEdges = data.mobile.edges.filter((e: FileEdge) => fname === _.get(e, 'node.relativePath', ''))
          let mobile
          if (mobileEdges.length > 0) {
            mobile = _.get(mobileEdges[0], 'node.childImageSharp.fluid', null)
          }
          const path = `${sourceInstanceName}/${fname}`
          const [category, imgName] = fname.split('/')
          const imagesInPath = _.get(imageInfoDict, category, {})
          let imageInfo
          if (imgName) {
            const imgBasename = imgName.split('.')[0]
            imageInfo = _.get(imagesInPath, imgBasename, null)
          }
          let title
          let caption
          if (imageInfo) {
            title = _.get(imageInfo, 'title', null)
            caption = _.get(imageInfo, 'caption', ``)
          }
          if (!title) {
            const projectInfo = allProjects.filter(p => p.folder === category)[0]
            if (!projectInfo) {
              window.alert(`project ${category} not found`)
              return null
            }
            title = projectInfo.project || projectInfo.details
          }
          if (caption !== null && desktop) {
            images.push({ path, desktop, mobile, thumb, title, caption })
          }
        })
        return (
          <AllImgProvider
            value={{
              maxWidth: 1200,
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
