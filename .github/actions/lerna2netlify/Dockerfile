FROM node:13.12-stretch-slim

RUN \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git libglu1 libxi6 libgconf-2-4 && \
    yarn global add lerna netlify-cli

COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
