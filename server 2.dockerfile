# base_image should likely move to some devops repo
FROM node:16.14.0-alpine3.15 as base_image

RUN apk update && \
  apk upgrade

# stage to enforce isolation of prod dependency fetch which relies on credentials in .npmrc
# can consier moving to jenkins agent if we can ensure consistent node versions
FROM base_image as builder

WORKDIR /build/

COPY class-instagram-project/server/package*.json ./server/
WORKDIR /build/server/
RUN npm install

WORKDIR /build/

COPY class-instagram-project/server/ ./server/
WORKDIR /build/server/
RUN npm run build
RUN npm prune --production

# actual delivered app
FROM base_image as app

WORKDIR /app/

COPY --from=builder /build/server/ /app/server/

WORKDIR /app/server/
EXPOSE 3000

CMD ["npm", "run", "start:prod"]


# 1) building my application - website / server...
# 2) writing a docker file script - npm i, npm run build, npm start
# 3) build a docker image, based on the docker file script - `docker build ...`
# 4) [optional] - push your image to a docker registry
# 5) deploy your app - docker run ... => running container
