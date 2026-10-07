#!/bin/sh -l
export NODE_OPTIONS=--openssl-legacy-provider
corepack enable && \
yarn install
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
# the build already ran above; skip the auto-installed Essential Gatsby plugin
# whose build lifecycle runs on "netlify deploy" and assumes Netlify's own build layout
export NETLIFY_SKIP_GATSBY_BUILD_PLUGIN=true
netlify deploy --prod --auth $SECRET_NETLIFY_AUTH --site $SECRET_NETLIFY_SITE_ID --dir $INPUT_PACKAGE_LOCATION/public
