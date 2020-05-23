FROM node:12.16.3
WORKDIR /a2a
COPY package.json .
RUN npm install
COPY . .
CMD node partb.js
EXPOSE 2430