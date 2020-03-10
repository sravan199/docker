FROM node:10-alpine
WORKDIR /usr/app
COPY package.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
CMD ["npm" , "start"]