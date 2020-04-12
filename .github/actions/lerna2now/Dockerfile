FROM node:13.12-stretch-slim

COPY . .

RUN \
  yarn global add lerna jest && \
  lerna bootstrap

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
