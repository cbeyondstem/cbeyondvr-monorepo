const site = {
  title: `Villa Clementine`,
  author: `Gerard Laine`,
  description: `Villa Clementine Photos`,
  siteUrl: `https://villa-clementine.fr/`,
  org: `Villa Clémentine`,
  contact: `contact@villa-clementine.fr`,
  favicon: './src/assets/img/favicon.comp.png',
  faviconSvg: './src/assets/img/favicon.comp.svg',
  logo: './src/assets/img/favicon.comp.svg',
  icon: './src/assets/img/favicon.comp.svg'
}

module.exports = {
  // pathPrefix: `/`,
  siteMetadata: site,
  // mapping: {
  //   'Mdx.fields.author': `AuthorJson`
  // },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/providers/pix_landscape`,
        name: 'img_landscape'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/providers/pix_portrait`,
        name: 'img_portrait'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: require.resolve(`../../node_modules/@cbeyond/ui-kit/plugins/custom-page-creator`),
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
        name: `assets/img`
      }
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/providers/blog`,
    //     ignore: [`*.(js|ts)?(x)`]
    //   }
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/gatsby/gatsby-tpl/mdx-layout-default.jsx')
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
