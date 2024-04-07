let myPromise = new Promise(function(res, rej) {
  try {
      console.log("starting executing promise");
      setTimeout(res, 4000);
  } catch(err) {
      rej(err);// when error
  } 
});

myPromise.then(() => console.log("timer finished!"));

// Or:
async function main() {
  await myPromise;
  console.log("timer finished!");
}

main();
