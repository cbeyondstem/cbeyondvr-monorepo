const site = {
  title: `Stories Starter`,
  author: `Armelle Laine`,
  description: `A starter allowing to create your first explorable stories with CBeyondSTEM kit`,
  siteUrl: `https://cbeyondstem.org/`,
  org: `CbeyondSTEM`,
  contact: `hello@cbeyondstem.org`,
  favicon: './src/assets/img/favicon2.png'
}
module.exports = {
  siteMetadata: site,
  mapping: {
    'Mdx.fields.author': `AuthorJson`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     ignore: [`*.(js|ts)?(x)`]
    //   }
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/templates/mdx-layout-default.jsx'),
          blog: require.resolve('./src/templates/mdx-layout-default.jsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          // {
          //   resolve: `gatsby-remark-copy-linked-files`
          // },
          {
            resolve: `gatsby-remark-smartypants`
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
