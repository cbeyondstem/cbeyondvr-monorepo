#!/bin/sh -l

export NODE_OPTIONS=--openssl-legacy-provider
yarn install
cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
yarn run now ./$INPUT_DEPLOY_TO_PREFIX$INPUT_DEPLOY_TO --prod --token=$SECRET_NOW_TOKEN
