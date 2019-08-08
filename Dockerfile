FROM node:11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install bcrypt
RUN npm install -g sequelize-cli

COPY . .

COPY ormconfig.docker.json ./ormconfig.json
COPY .env ./

EXPOSE 8000

CMD npm run dev