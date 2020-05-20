# @cbeyond/ui-kit

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

# MVC

separate View Components from Data Control using rxjs facades and react hooks

https://medium.com/@thomasburlesonIA/https-medium-com-thomasburlesonia-react-hooks-rxjs-facades-4e116330bbe1

https://github.com/ThomasBurleson/mindspace-utils/blob/mster/libs/utils/react/src/lib/di/README.md

https://github.com/ThomasBurleson/todomvc/blob/master/examples/react-hooks/src/reducers/useTodos.js

https://codesandbox.io/u/ThomasBurleson/sandboxes

https://www.gatsbyjs.org/docs/recipes/querying-data/

https://netbasal.com/getting-to-know-the-defer-observable-in-rxjs-a16f092d8c09
