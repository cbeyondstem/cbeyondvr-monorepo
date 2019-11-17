import * as _ from 'lodash'
import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FileEdg, MdxFrontmatter } from 'types/gatsby-graphql-types.d.ts'

export interface MdxProps {
  uid: string
  title: string
  category: string
  route: boolean
  slug: string
  excerpt: string
  path: string
  children: MdxProps[]
  parent?: MdxProps
  frontmatter?: MdxFrontmatter
}
export interface MdxListProps {
  mdxList: MdxProps[]
  mdxBySlug: { [slug: string]: MdxProps }
}
const { Consumer, Provider } = React.createContext({
  mdxList: [],
  mdxBySlug: {}
} as MdxListProps)

export interface MdxProviderProps {
  children: React.ReactNode
}

const AllMdxComp: React.FunctionComponent<MdxProviderProps> = props => {
  const { children } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(sort: { fields: [fields___uid], order: ASC }) {
            edges {
              node {
                id
                fileAbsolutePath
                excerpt(pruneLength: 160)
                fields {
                  slug
                  uid
                  route
                  category
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const mdxBySlug: { [slug: string]: MdxProps } = {}
        const mdxList = data.allMdx.edges.map((edge: FileEdge) => {
          const excerpt = _.get(edge, 'node.excerpt', null)
          const uid = _.get(edge, 'node.fields.uid', null)
          const slug = _.get(edge, 'node.fields.slug', null)
          const category = _.get(edge, 'node.fields.category', null)
          const route = _.get(edge, 'node.fields.route', null)
          let title = _.get(edge, 'node.frontmatter.title', null)
          const frontmatter = _.get(edge, 'node.frontmatter', null)

          if (title.length === 0) {
            title = slug
              .split('/')
              .slice(-1)
              .join('/')
          }
          const path = _.get(edge, 'node.fileAbsolutePath', '')
          return { uid, title, slug, route, category, excerpt, path, frontmatter }
        })
        mdxList.forEach((m: MdxProps) => {
          Object.assign(m, { children: mdxList.filter((c: MdxProps) => c.slug.search(`${m.slug}/`) === 0) })
          m.children.forEach((c: MdxProps) => {
            Object.assign(c, { parent: m })
          })
          mdxBySlug[m.slug] = m
        })
        return (
          <Provider
            value={{
              mdxList,
              mdxBySlug
            }}
          >
            {children}
          </Provider>
        )
      }}
    />
  )
}

export const AllMdx = {
  Provider: AllMdxComp,
  Consumer
}
