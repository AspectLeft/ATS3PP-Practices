FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-cache

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]