const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

// Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
const gatsbyRule1 = async config => {
  config.module.rules[0].include = await new Promise((resolve, reject) => {
    const gatsbyBinPath = require('path').resolve('./node_modules/.bin/gatsby')
    require('fs').lstat(gatsbyBinPath, (err, stats) => {
      if (stats.isSymbolicLink()) {
        if (err) {
          reject(err)
        } else {
          const gatsbyResolvedLink = require('fs').readlinkSync(gatsbyBinPath)
          if (gatsbyResolvedLink !== '../gatsby/cli.js') {
            config.module.rules[0].include = require('path').resolve(
              gatsbyResolvedLink.replace('/../node_modules/gatsby/cli.js', '')
            )
          }
        }
      }
      resolve()
    })
  })
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader')
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env')
  ]
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries')
  ]
}

const gatsbyRule2 = {
  test: /\.(ts|tsx)$/,
  loader: require.resolve('babel-loader'),
  options: {
    presets: [['react-app', { flow: false, typescript: true }]],
    plugins: [
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries')
    ]
  }
}
const storybookAddOnDocRule1 = {
  // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
  //     the docs page from the markdown
  test: /\.(stories|story)\.mdx$/,
  use: [
    {
      loader: 'babel-loader',
      // may or may not need this line depending on your app's setup
      options: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    },
    {
      loader: '@mdx-js/loader',
      options: {
        compilers: [createCompiler({})]
      }
    }
  ]
}

const storybookAddOnDocRule2 = {
  test: /\.(stories|story)\.[tj]sx?$/,
  loader: require.resolve('@storybook/source-loader'),
  exclude: [/node_modules/],
  enforce: 'pre'
}

module.exports = {
  stories: ['../src/components/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs/register'
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null
    //   }
    // }
  ],
  webpackFinal: async config => {
    await gatsbyRule1(config)
    config.module.rules.push(gatsbyRule2)
    config.module.rules.push(storybookAddOnDocRule2)
    config.module.rules.push(storybookAddOnDocRule1)
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main']
    config.resolve.extensions.unshift('.ts', '.tsx')
    return config
  }
}
