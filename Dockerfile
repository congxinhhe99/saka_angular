FROM node:18.13.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
EXPOSE 4200
CMD ["npm", "start"]