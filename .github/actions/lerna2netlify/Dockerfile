FROM node:21.6-slim

RUN \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git libglu1 libxi6 libgconf-2-4 ffmpeg libsm6 libxext6 && \
    npm install -g lerna netlify-cli

COPY . .

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
