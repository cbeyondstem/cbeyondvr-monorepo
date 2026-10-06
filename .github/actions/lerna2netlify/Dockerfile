FROM node:24-slim

RUN \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git libglu1 libxi6 libgconf-2-4 ffmpeg libsm6 libxext6 && \
    npm install -g corepack lerna netlify-cli

COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
