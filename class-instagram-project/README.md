# Run the client side locally:
1) `cd client-side`
2) `npm i`
3) `npm run dev`

# Run the server side locally:
1) `cd server`
2) `npm i`
3) `npm run dev`

# To run mongo locally:
1) Install Docker software from here - https://docs.docker.com/get-docker/
2) Run Docker software on your computer
3) in terminal run - `docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:latest`
4) Update in .env file - MONGO_URI=mongodb://localhost:27017
- (To kill the mongo - run `docker ps`, then copy the id under the CONTAINER_ID, then run `docker kill <THE-ID-YOU-COPIED>`)
- (To remove container from your computer - `docker container rm <THE-CONTAINER-ID>`)