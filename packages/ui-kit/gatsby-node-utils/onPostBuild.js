/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const path = require("path");

exports.getOnPostBuild = dir => () => {
  const prefix = process.env.DEPLOY_TO_PREFIX || "";
  if (process.env.DEPLOY_TO) {
    // used for zeit now deployment
    fs.renameSync(
      path.join(dir, "public"),
      path.join(dir, prefix + process.env.DEPLOY_TO)
    );
  } else if (process.env.DEPLOY_MOVE_TO) {
    // used for netlify deployment
    fs.moveSync(
      path.join(dir, "public"),
      path.join(dir, process.env.DEPLOY_MOVE_TO),
      { overwrite: true }
    );
  }
};
