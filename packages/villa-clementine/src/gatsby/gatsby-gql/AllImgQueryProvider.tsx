import * as _ from 'lodash'
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdge } from '@cbeyond/ui-kit/dist/types/gatsby-graphql-types'
import { ProviderProps, CarouselImgProps, AllImgProvider } from '@cbeyond/ui-kit'

export const query = graphql`
  fragment ImgResponsive on ImageSharp {
    fluid(quality: 100, maxWidth: 1200) {
      ...GatsbyImageSharpFluid_withWebp
    }
  }
  fragment Thumbnails on ImageSharp {
    fixed(quality: 100, fit: COVER, cropFocus: CENTER, width: 75, height: 56) {
      src
    }
  }
`

export const AllImgQueryProvider: React.FunctionComponent<ProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          contents: allFile(filter: { sourceInstanceName: { ne: "assets/img" } }) {
            edges {
              node {
                sourceInstanceName
                relativePath
                childImageSharp {
                  ...ImgResponsive
                  ...Thumbnails
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images: CarouselImgProps[] = []
        data.contents.edges.forEach((edge: FileEdge) => {
          const img = _.get(edge, 'node.childImageSharp.fluid', null)
          const thumb = _.get(edge, 'node.childImageSharp.fixed.src', null)
          const sourceInstanceName = _.get(edge, 'node.sourceInstanceName', '')
          let path = _.get(edge, 'node.relativePath', '')
          path = `${sourceInstanceName}/${path}`
          if (img) {
            images.push({ path, img, thumb })
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
