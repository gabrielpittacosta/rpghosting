FROM node:11

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/


RUN npm install
RUN npm rebuild bcrypt
RUN npm install -g sequelize-cli


COPY . .

COPY ormconfig.docker.json ./ormconfig.json
COPY .env /usr/src/app/

EXPOSE 8000

CMD npm start