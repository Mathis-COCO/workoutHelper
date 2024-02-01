FROM node:18.12.1
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["/bin/bash", "-c", "npm run migration:run; npm run start"]