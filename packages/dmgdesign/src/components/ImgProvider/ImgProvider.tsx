import * as _ from 'lodash'
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdge } from 'types/gatsby-graphql-types.d.ts'
import { CarouselProps } from '@cbeyond/ui-kit/src/components/Carousel'

const { Consumer, Provider } = React.createContext({
  images: []
} as CarouselProps)

export interface ImgProviderProps {
  children: React.ReactNode
}

const ImgProviderComp: React.FunctionComponent<ImgProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          contents: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
            edges {
              node {
                relativeDirectory
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800, maxHeight: 700, fit: FILL) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  fixed(quality: 100, fit: COVER, cropFocus: CENTER, width: 75, height: 56) {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.contents.edges.map((edge: FileEdge, idx: number) => {
          const img = _.get(edge, 'node.childImageSharp.fluid', null)
          const thumb = _.get(edge, 'node.childImageSharp.fixed.src', null)

          const path = _.get(edge, 'node.relativeDirectory', '')
          if (img) {
            return { path, img, thumb }
          }
        })
        return (
          <Provider
            value={{
              images
            }}
          >
            {children}
          </Provider>
        )
      }}
    />
  )
}

export const ImgProvider = {
  Provider: ImgProviderComp,
  Consumer
}
