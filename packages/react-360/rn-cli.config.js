const path = require('path')
const blacklist = require('metro/src/blacklist')

const config = {
  getProjectRoots() {
    return getRoots()
  },

  getBlacklistRE() {
    return blacklist([])
  },

  getAssetExts() {
    return ['obj', 'mtl']
  },

  getPlatforms() {
    return ['vr']
  },

  getProvidesModuleNodeModules() {
    return ['react-native', 'react-360']
  },
}

function getRoots() {
  const root = process.env.REACT_NATIVE_APP_ROOT
  if (root) {
    return [path.resolve(root)]
  }
  return [path.resolve(__dirname)]
}

module.exports = config
