import * as React from 'react'
// import { graphql } from 'gatsby'
// import { uid } from 'react-uid'
// // import { AllSvg } from '../components/AllSvg'
// import { Query } from '../types/gatsby-graphql-types'

export interface BlogIndexProps {
  // data: Query
  location: {
    pathname: string
  }
}
export const BlogIndexPage = (props: BlogIndexProps) => {
  const { location } = props
  // const siteTitle = data.site.siteMetadata.title
  return (
    <div>
      <h1>HERE</h1>
    </div>
  )
}
// <AllSvg.Provider>
//   <AllSvg.Consumer>
//     {({ svgByPath }) => (
//       <div>
//         {Object.entries(svgByPath).map(([p, svg], idx) => {
//           const { Svg: SvgRaw } = svg
//           return <SvgRaw key={uid(p, idx)} />
//         })}
//       </div>
//     )}
//   </AllSvg.Consumer>
// </AllSvg.Provider>

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
