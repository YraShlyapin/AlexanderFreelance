FROM node:trixie-slim
WORKDIR /test
COPY . /test/
RUN npm i
EXPOSE 8080
CMD [ "node", "./index.js" ]