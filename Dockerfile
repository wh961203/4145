FROM node:12.16.3
WORKDIR /a2
COPY package.json .
RUN npm install
COPY . .
CMD node partc.js
EXPOSE 2430
