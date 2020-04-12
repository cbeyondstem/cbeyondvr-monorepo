FROM node:13.12-stretch-slim

# COPY ${GITHUB_WORKSPACE} .
# COPY ../../../package.json .
# COPY ../../../tsconfig.build.json .
# COPY ../../../packages packages

# RUN \
#   yarn global add lerna now && \
#   lerna bootstrap
COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
