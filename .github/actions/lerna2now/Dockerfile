FROM node:13.12-stretch-slim

RUN \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git && \
    yarn global add lerna now

COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
