const site = {
  title: `CBeyondSTEM Stories Starter`,
  author: `Armelle Laine`,
  description: `A starter allowing to create your first explorable stories with CBeyondSTEM kit`,
  siteUrl: `https://cbeyonstem.org/`,
  org: `CbeyondSTEM`,
  contact: `hello@cbeyondstem.org`,
  favicon: './src/assets/img/cbeyondstem-favicon.png',

  // @cbeyond mdx-kit configuration: mdx folder and authors
  // dictionary describing the mdx folder hierarchy (for blog/stories content)
  // mdx: {
  //   'content/blog':'blog',
  //   'content/stories': 'stories'
  //   'content/assets': 'assets'
  // }
  mdx: null,

  // set authors to true if blog authors attributes are defined in a json file
  authors: false
}

const gatsbySourceList = site.mdx
  ? Object.entries(site.mdx).forEach((path, name) => {
      return {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/${path}`,
          name: `${name}`
        }
      }
    })
  : []

module.exports = {
  siteMetadata: site,
  mapping: site.authors && {
    'Mdx.fields.author': `AuthorJson`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          ...gatsbySourceList,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          },

          {
            resolve: `gatsby-remark-smartypants`
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: '>',
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {
                sh: 'bash',
                js: 'javascript',
                ts: 'typescript',
                py: 'python'
              },
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // name *.comp.svg all the svg files to be loaded as react components
          include: /\.comp\.svg$/
        }
      }
    },
    // Parse JSON files
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.body }]
                }
              })
            },

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             * */
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    body
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: site.title,
        short_name: site.title,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: site.favicon
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: site.favicon,

        // WebApp Manifest Configuration
        appName: site.title, // Inferred with your package.json
        appDescription: site.description,
        developerName: site.author,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`react-spring`, `react-hot-loader`]
      }
    },
    // gatsby plugin layout sticks a layout (by default located under ./src/layout)
    'gatsby-plugin-layout',
    'gatsby-plugin-typescript',
    'gatsby-plugin-material-ui'
  ]
}
