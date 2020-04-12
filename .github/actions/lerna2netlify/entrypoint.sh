#!/bin/sh -l

cd packages/ui-kit
yarn build
cd ../../$INPUT_PACKAGE_LOCATION
yarn build
yarn run now ./$INPUT_DEPLOY_TO_PREFIX$INPUT_DEPLOY_TO --prod --token=$SECRET_NETLIFY_TOKEN
