/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

exports.getOnPostBuild = dir => () => {
  const prefix = process.env.DEPLOY_TO_PREFIX || ''
  if (process.env.DEPLOY_TO) {
    fs.renameSync(
      path.join(dir, 'public'),
      path.join(dir, prefix + process.env.DEPLOY_TO)
    )
  }
}
