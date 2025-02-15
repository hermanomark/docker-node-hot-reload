FROM node:23-alpine

WORKDIR /app

# COPY package.json /app/
COPY package*.json /app/

COPY src /app/

RUN npm install

# CMD ["node", "server.js"]
CMD ["npm", "start"]