const site = {
  title: `Courouble Design & Engineering`,
  author: `Armelle Laine`,
  description: `Composite Structure Design`,
  siteUrl: `https://couroubledesign.com/`,
  org: `Courouble Design & Engineering`,
  contact: `fred@couroubledesign.com`,
  favicon: './src/assets/img/courouble-design-favicon.png',
  faviconSvg: './src/assets/img/courouble-design-circle.comp.svg',
  logo: './src/assets/img/courouble-design-logo.comp.svg',
  icon: './src/assets/img/courouble-design-logo.comp.svg',

  // original name servers:
  // https://my.ionos.com/domain-nameserver/dmgdesignsf.com?__lf=HomeFlow&linkId=ct.tab.domainlist.nameserver&from=subdomains%2Fdmgdesignsf.com
  // - ns57.1and1.com
  // - ns58.1and1.com
  // @cbeyond mdx-kit configuration: mdx folder and authors
  // dictionary describing the mdx folder hierarchy (for blog/stories content)
  // mdx: {
  //   'content/blog':'blog',
  //   'content/stories': 'stories'
  //   'content/assets': 'assets'
  // }
  mdx: {
    'content/projects': 'projects'
    // 'content/pages': 'pages'
  },

  // set authors to true if blog authors attributes are defined in a json file
  authors: false
}

const gatsbySourceList = mdx => {
  const l = []
  Object.entries(mdx).forEach(([path, name]) => {
    l.push({
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/${path}`,
        name: `${name}`
      }
    })
  })
  return l
}
const gatsbyPageCreationList = mdx => {
  const l = []
  Object.entries(mdx).forEach(([path, name]) => {
    l.push({
      resolve: require.resolve(`../../node_modules/@cbeyond/ui-kit/plugins/custom-page-creator`),
      options: {
        path: `${__dirname}/${path}`
      }
    })
  })
  return l
}
module.exports = {
  siteMetadata: site,
  mapping: site.authors && {
    'Mdx.fields.author': `AuthorJson`
  },
  plugins: [
    ...gatsbySourceList(site.mdx),
    ...gatsbyPageCreationList(site.mdx),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pix_landscape`,
        name: 'img_landscape'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pix_portrait`,
        name: 'img_portrait'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
        name: 'assets/img'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/gatsby/gatsby-tpl/mdx-layout-default.jsx'),
          blog: require.resolve('./src/gatsby/gatsby-tpl/mdx-layout-default.jsx')
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
