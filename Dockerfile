FROM node:latest

COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install -g http-server
COPY . .

RUN npm run build

RUN chmod +x src/wait-for.sh

EXPOSE 8080
CMD ["http-server", "dist"]