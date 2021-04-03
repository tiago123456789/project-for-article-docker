FROM node:15.13.0-alpine3.10

ENV PORT 4000

WORKDIR app/

COPY . ./

RUN npm i 

EXPOSE $PORT

CMD node server.js
