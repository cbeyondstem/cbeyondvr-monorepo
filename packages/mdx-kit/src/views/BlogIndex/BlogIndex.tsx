/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-danger */
import * as React from 'react'
import { Query } from 'types/gatsby-graphql-types.d.ts'

export interface BlogIndexProps {
  Link: React.ComponentType<React.ComponentPropsWithRef<'a'>>
  data: Query
}

export const BlogIndex = (props: BlogIndexProps) => {
  const { data, Link } = props
  const posts = data.allMdx.edges
  return (
    <>
      {posts.map(({ node }) => {
        if (node.fields.category !== 'blog') {
          return null
        }
        if (!node.fields.route) {
          return null
        }
        const linkProps: React.ComponentPropsWithRef<'a'> = {
          to: node.fields.slug,
          style: { boxShadow: `none` },
          children: node.frontmatter.title || node.fields.slug
        } as React.ComponentPropsWithRef<'a'>
        return (
          <div key={node.fields.slug}>
            <h3
              style={
                {
                  // marginBottom: rhythm(1 / 4)
                }
              }
            >
              <Link {...(linkProps as React.ComponentPropsWithRef<'a'>)} />
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </>
  )
}
