# # https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
FROM node:10

# Create app directory
RUN mkdir -p /api-src
WORKDIR /api-src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /api-src
RUN npm install --global typescript 
RUN npm install --global nodemon
RUN npm install --global ts-node

EXPOSE 4000
ENV NODE_ENV=development
ENV PORT=4000
CMD [ "npm", "start" ]

