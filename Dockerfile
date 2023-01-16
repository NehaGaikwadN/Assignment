FROM node:16
LABEL maintainer = "Neha.gaikwad@niveussolutions.com"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install npm@latest -g
RUN npm install


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
ENV PORT 3000
CMD [ "npm", "start" ]
