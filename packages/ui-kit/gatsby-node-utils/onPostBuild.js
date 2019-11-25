/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

exports.onPostBuild = function onPostBuild() {
  const prefix = process.env.DEPLOY_TO_PREFIX || ''
  if (process.env.DEPLOY_TO) {
    fs.renameSync(
      path.join(__dirname, 'public'),
      path.join(__dirname, prefix + process.env.DEPLOY_TO)
    )
  }
}
