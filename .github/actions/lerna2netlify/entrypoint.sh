#!/bin/sh -l
export NODE_OPTIONS=--openssl-legacy-provider
corepack enable && \
corepack use yarn@* && \
yarn install
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
yarn run netlify deploy --prod --auth $SECRET_NETLIFY_AUTH --site $SECRET_NETLIFY_SITE_ID --dir public
