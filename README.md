# Running via docker-compose

- `docker-compose down -v && docker-compose up --build`
- `docker-compose down -v && docker-compose -f docker-compose.prod.yml up`

## Running via docker build

- `docker build -t bare-example .`
- `docker run -p 8001:4000 bare-example`

### Log docker compose

- `docker-compose logs`

### To see the size of the docker image

- `docker images | grep bare-example`

### DELETE

- `docker rm $(docker ps -a -q) -f D`
- `docker rmi $(docker images -a -q)`
- `docker volume prune`

### Connect to db container

docker exec -it server*db_1 psql -U \_username_here* bare-example

### Connect to see files in container via bash

docker run -it bare-example-multi-stage sh
docker run -it bare-example-multi-stage sh

### Gotchas

Changing localhost to host.docker.internal to access postgres inside a docker container

Downgrade to postgres 11 because there's problem with postgres 12 with typeorm and I can't pinfuckingpoint the issue

Downgrade to react-scripts 3.4.0 to work with Docker

Nodemon has this issue on docker
https://github.com/remy/nodemon#application-isnt-restarting
