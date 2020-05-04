# # https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
FROM node:10

# Create app directory
RUN mkdir -p /web-src
WORKDIR /web-src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /web-src
RUN npm install --global typescript 
RUN npm install --global nodemon
RUN npm install --global ts-node
RUN npm install --global react-scripts

EXPOSE 3000
ENV NODE_ENV=development
ENV PORT=3000
CMD [ "npm", "start" ]

