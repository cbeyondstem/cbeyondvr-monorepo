FROM node:21.6-slim

RUN \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git libglu1 libxi6 libgconf-2-4 && \
    corepack enable && \
    corepack use yarn@* && \
    yarn global add lerna netlify-cli

COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
