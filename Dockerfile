FROM node:12.16.3
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update

WORKDIR /usr/src/app
EXPOSE 3000
CMD ["npm", "run", "start"]
