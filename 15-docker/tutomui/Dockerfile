# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app to container
COPY . ./

RUN npm install -g serve
RUN npm run w:build --force

# start app in container
CMD ["npm", "run", "start"]