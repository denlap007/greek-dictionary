FROM node:lts-bullseye-slim

# Create app directory
WORKDIR /usr/src/app

# copy files
COPY . .

ENV NODE_ENV=production 

# install mode modules
RUN npm ci && npm cache clean --force 

CMD [ "npm", "start" ]
