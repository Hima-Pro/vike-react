FROM node:alpine3.18

COPY . /app

WORKDIR /app

RUN npm install && npm build

EXPOSE 8080

CMD [ "npm run preview" ]