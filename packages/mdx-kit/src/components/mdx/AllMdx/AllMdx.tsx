import * as _ from 'lodash'
import * as React from 'react'
import { graphql } from 'gatsby'
import { FileEdge, MdxFrontmatter, Query } from '../../../types/gatsby-graphql-types'

export interface MdxProps {
  uid: string
  title: string
  category: string
  route: boolean
  slug: string
  sourceInstanceName: string
  excerpt: string
  path: string
  children?: MdxProps[]
  parent?: MdxProps
  frontmatter?: MdxFrontmatter
}
export interface MdxListProps {
  mdxList: MdxProps[]
  mdxBySlug: { [slug: string]: MdxProps }
}
export const { Consumer: AllMdxConsumer, Provider: AllMdxProvider } = React.createContext({
  mdxList: [],
  mdxBySlug: {}
} as MdxListProps)

export interface MdxProviderProps {
  children: React.ReactNode
}

export const allMdxQueryRender: (children: React.ReactNode) => (data: Query) => React.ReactNode = children => data => {
  const mdxBySlug: { [slug: string]: MdxProps } = {}
  const mdxList = data.allMdx.edges.map((edge: FileEdge) => {
    const excerpt = _.get(edge, 'node.excerpt', null)
    const uid = _.get(edge, 'node.fields.uid', null)
    const slug = _.get(edge, 'node.fields.slug', null)
    const category = _.get(edge, 'node.fields.category', null)
    const sourceInstanceName = _.get(edge, 'node.fields.sourceInstanceName', null)
    const route = _.get(edge, 'node.fields.route', null)
    let title = _.get(edge, 'node.frontmatter.title', null)
    const frontmatter = _.get(edge, 'node.frontmatter', null)

    // note on the path field:
    // the ':' is a workaround due to a recent behavior of gatbsy graphql
    // which maps a path object instead of the string when the string
    // exactly matches a file. so to prevent the string to match we add a ':' prefix
    const path = _.get(edge, 'node.fields.relativePath', ':').slice(1)

    if (title.length === 0) {
      title = slug
        .split('/')
        .slice(-2, -1)
        .join('/')
    }
    return {
      uid,
      title,
      slug,
      sourceInstanceName,
      route,
      category,
      excerpt,
      path,
      frontmatter
    }
  })
  mdxList.forEach((m: MdxProps) => {
    Object.assign(m, {
      children: mdxList.filter((c: MdxProps) => c !== m && c.slug.search(`${m.slug}`) === 0)
    })
    m.children.forEach((c: MdxProps) => {
      Object.assign(c, { parent: m })
    })
    mdxBySlug[m.slug] = m
  })
  return (
    <AllMdxProvider
      value={{
        mdxList,
        mdxBySlug
      }}
    >
      {children}
    </AllMdxProvider>
  )
}
