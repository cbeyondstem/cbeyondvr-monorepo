import * as _ from "lodash";
import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FileEdge } from "types/gatsby-graphql-types.d.ts";

export interface MdxProps {
  uid: string;
  title: string;
  category: string;
  route: boolean;
  slug: string;
  excerpt: string;
  path: string;
}
export interface MdxListProps {
  mdxList: MdxProps[];
}
const { Consumer, Provider } = React.createContext({
  mdxList: []
} as MdxListProps);

export interface MdxProviderProps {
  children: React.ReactNode;
}

const AllMdxComp: React.FunctionComponent<MdxProviderProps> = props => {
  const { children } = props;
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
                }
              }
            }
          }
        }
      `}
      render={data => {
        const mdxList = data.allMdx.edges.map((edge: FileEdge) => {
          const excerpt = _.get(edge, "node.excerpt", null);
          const uid = _.get(edge, "node.fields.uid", null);
          const slug = _.get(edge, "node.fields.slug", null);
          const category = _.get(edge, "node.fields.category", null);
          const route = _.get(edge, "node.fields.route", null);
          let title = _.get(edge, "node.frontmatter.title", null);
          if (title.length === 0) {
            title = slug;
          }
          const path = _.get(edge, "node.fileAbsolutePath", "");

          return { uid, title, slug, route, category, excerpt, path };
        });
        return (
          <Provider
            value={{
              mdxList
            }}
          >
            {children}
          </Provider>
        );
      }}
    />
  );
};

export const AllMdx = {
  Provider: AllMdxComp,
  Consumer
};
