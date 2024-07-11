import * as Collector from "./collectors-classes.js";

// 'main' - method that listens to the custom 'acme-sdk-loaded' event. It activates the sdk collection, and is the ONLY function that is outside a class.
// THIS FUNCTION SHOULD BE IN THE END OF THE SCRIPT:
function main() {
  // start the collectors
  const ScreenWidthCollector = new Collector.ScreenWidthCollector();
  console.log(ScreenWidthCollector);
}
// start the function when custom event has finished loading
document.addEventListener("click", main);
