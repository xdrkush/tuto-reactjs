FROM node:13.12.0-alpine

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

CMD ["npm", "run", "start"]
