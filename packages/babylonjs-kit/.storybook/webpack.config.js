module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.performance = {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  };
  return config;
};
