# Run the client side locally:
1) `cd client-side`
2) `npm i`
3) `npm run dev`

# Run the server side locally:
1) `cd server`
2) `npm i`
3) update .env file with your access & refresh token secrets:
run `node`
then run:
`require('crypto').randomBytes(48).toString('hex')`
use it twice and paste your first secret in: ACCESS_TOKEN_SECRET
and your second secret in REFRESH_TOKEN_SECRET
save your .env file
4) `npm run dev` (or run the server via the debugger)

# To run mongo locally:
1) Install Docker software from here - https://docs.docker.com/get-docker/
2) Run Docker software on your computer
3) in terminal run - `docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:latest`
4) Update in .env file - MONGO_URI=mongodb://localhost:27017
- (To kill the mongo - run `docker ps`, then copy the id under the CONTAINER_ID, then run `docker kill <THE-ID-YOU-COPIED>`)
- (To remove container from your computer - `docker container rm <THE-CONTAINER-ID>`)

# To run redis locally:
1) Install Docker software from here - https://docs.docker.com/get-docker/
1.1) Install redis-cli on windows: https://redis.io/docs/getting-started/installation/install-redis-on-windows/
1.2) [If mac] - Install redis-cli on mac: https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/
2) run `docker run -p 6379:6379 --env ALLOW_EMPTY_PASSWORD=yes -it redis/redis-stack-server:latest`

# To run server with docker locally:
1) change in the package.json the key "type": "module".
2) make sure you have a docker file - server.dockerfile
3) cd back to repo root
4) docker build -t my-fs-server -f server.dockerfile .
5) docker run -p 3000:3000 my-fs-server
then your server is up and ready to recieve requests

CI-CD:
running on github machines a few steps on your code:
1) npm i
2) npm run build
3) npm run test
4) npm audit // for vulnerability scan
5) docker build...
6) docker push... // push the docker image to the docker registry
-- until here - the CI
CD:
7) then later in the server - docker run xxx (xxx is the address of the image from the docker registry) - then the server runs the updated application version (the server was deployed)
