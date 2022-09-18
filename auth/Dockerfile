FROM node:17-alpine

RUN npm install --location=global nodemon

WORKDIR /app

COPY . .

COPY package.json /app/

RUN npm install

EXPOSE 4000

CMD ["npm","run","dev"]

