#!/bin/sh -l

export NODE_OPTIONS=--openssl-legacy-provider
yarn install
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
netlify deploy --prod --auth $SECRET_NETLIFY_AUTH --site $SECRET_NETLIFY_SITE_ID --dir public
