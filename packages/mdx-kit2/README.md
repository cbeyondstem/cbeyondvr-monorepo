# @cbeyond/mdx-kit

cbeyond stories website starter, based on the awesome gatsby static site generator
and its advanced mdx integration features.

cbeyond mdx-kit features:

- custom page creator:

  - creates pages from mdx files which uri reflect the mdx directory hierarchy
  - enhancement from `gatsby-plugin-page-creator` which creates a flat structure

- custom frontmatter fields:
  - route:
    - set it to false to exclude the file from the page creation process
    - hot reload of this flag is supported
  - Svg component in the mdx global scope
    - use this component to easily inline insert local svg files
    - with this component, svg insertion supports hot reload (not the case for other gatsby-plugin-svg solutions)
- AllMdx and AllSvg providers to easily access all mdx and svg file info from any component without the need of a gatsby graphql query.
