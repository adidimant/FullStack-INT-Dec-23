echo "Start deploying server!"
npm i
npm run build
npm run start:prod
echo "Finished deploying & running server"