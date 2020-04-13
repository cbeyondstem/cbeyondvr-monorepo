#!/bin/sh -l

lerna bootstrap
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
yarn run now --prod --token=$SECRET_NETLIFY_TOKEN
