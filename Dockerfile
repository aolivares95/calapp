FROM node:latest

COPY package*.json ./
RUN npm install --omit=dev
RUN npm install -g http-server

RUN apt-get update && apt-get install -y netcat-openbsd
COPY . .

RUN npm run build

RUN chmod +x src/wait-for.sh

EXPOSE 8080
