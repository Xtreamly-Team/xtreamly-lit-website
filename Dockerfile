FROM node:20.16
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 4001
