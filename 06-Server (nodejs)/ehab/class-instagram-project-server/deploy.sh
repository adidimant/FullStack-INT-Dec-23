echo "Start deploying server!"
npm i
npm run build
# npm audit
# npm run lint
# npm run test
# docker push
npm run start:prod
echo "Finished deploying & running server"