#!/bin/sh -l

lerna bootstrap
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
netlify --prod --auth=$SECRET_NETLIFY_AUTH --site=$SECRET_NETLIFY_SITE_ID --dir=.netlify/build
