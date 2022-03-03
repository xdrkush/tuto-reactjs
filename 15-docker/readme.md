## pre-requis
  - docker
  - docker-compose 

# Docs 1
## Run All
```
docker-compose up --build --remove-orphans
```

## Clear disk image docker
```
docker rm $(docker ps -a -q)
```

## Go to
```
http://localhost:7777
```

# Docs 2

## Front:
## Create image docker
```
docker build -t tutomui:dev .
```

## Run Container in Docker
```
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true tutomui:dev
```

## Back:
## Create image docker
```
docker build -f Dockerfile -t server .
```

## Run Container in Docker
```
docker run -it -p 3031:3030 server
```

## Source 1&2
  - https://mherman.org/blog/dockerizing-a-react-app/
  - https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/
