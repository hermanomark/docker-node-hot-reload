# FROM node:23-alpine
FROM node:24

WORKDIR /app

# COPY package.json /app/
# COPY package*.json /app/

# COPY src /app/

COPY . .


RUN npm install

# CMD ["node", "server.js"]
CMD ["npm", "start"]