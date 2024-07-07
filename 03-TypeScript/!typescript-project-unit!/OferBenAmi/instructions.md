Unit project - Typescript, Object-Oriented programming, browser deep functionalities
You are writing a web-sdk for a cyber company "Acme-Cyber", this sdk is a javascript code that is running on the customers websites.
Each customer is doing on his website: `<script src="<THE-URL-FOR-YOUR-COMPANY-PUBLIC-SDK>" defer/>` and by this your script is loaded in his website.
Once the script finish loaded - it should sent a custom event "acme-sdk-loaded" (you should dispatch a custom event at the end of the script).
When this event is being sent - the collectors should start collecting & sending events (objects) with data-points about the user, this enables your company to monitor the activity of the user and detect suspicious activity like bot activity or hackers.

You should implement:
- `main` method that listens to the custom "acme-sdk-loaded" event and activate the sdk collection.
  - except the `main` function - there shouldn't be any function that is outside a class.
- `maintainLastXItems` generic function - a static function in Utils static class, that recieves an array, bufferSize: number, and new item - and making sure that the array has maximum of bufferSize length. if it's less - just push the item to the array, if there's bufferSize length or more - delete the first element and push the new one to the array.
- Fetch configuration every 1 minute from a remote server, by customerId (in the query-param) - in the main method - save it in the localStorage and read it when it's needed. You can assume the remote configuration will be received like this:
{ COLLECTORS_INTERVAL: 60000, DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10, SDK_ENABLED: true }
the url - "https://acme-server.com/conf" - just write this as an example (in a comment) in a `getConfig` method, but actually return a constant json object.
  - Recommended - manage a new class called EventsManager, that has two functions: `getConfig` (that handles the server configuration), `updateData` (gets the big object with all the data-points colleceted data, should be updated via a fetch POST request (the body of the request will be the data object))
  - The data-object should look like: { screenWidth: 1748, screenHeight: 800, referrer: 'https://lighttricks.com' }
- `Collector` generic interface, that deals with the collection of generic T or an array of type T, which contains:
  - getData() - returns the data of the collector
  - interval - time - decided by the remote configuration - under `COLLECTORS_INTERVAL` key. the interval tells you the frequency of the collect update.
  - getKey() - returns the string name of the collector (for example 'screenWidth'), you should call this method to get the relevant key for the final object that you build from all the collectors, when you do a loop over all the Collectors.
  - startCollect() - method that starts collecting, basically you should start a setInterval that every `interval` time - update the data of the collector class.
  - finishCollect() - method that finish collecting, will be callsed in case of an emergency. in case of calling getData after calling the finishCollect - the getData should return `null`.
    - if SDK_ENABLED
- More then 20 different browser collectors, each collector is a class that implements this Collector interface.
  - You should put the relevant generic type T in the class, for example: `class ScreenWidthCollector implements Collector<number> { // class content here }`
  - There are two types of collectors - continuos collectors & regular collectors
    - Regular collector is a class that just implements Collector<T>
    - ContinousCollector - another generic interface that has also `bufferSize?: number`. if a collector is a ContinousCollector - it should implement both Collector<T> and ContinousCollector interfaces!!
      - ContinousCollector holds an array of last items with the length of up to bufferSize (of DEFAULT_BUFFER_CONTINOUS_COLLECTORS if not provided)
      - The bufferSize is an optional value, it means how many last data-snapshots from the data-points it should keep in the array.
  - You should understand the other types of each collector and use it (you might need to import the relevant type)
  - You might need to expand the type of Window/Navigator/Document if you'll get some typescript error under window.xxx key, we do that using `decalre global` (declare - tells the typescript that this thing exist outside our project [the browser] - and to trust us):
    ```javascript
        declare global { // this is global for all the project
        interface Navigator {
          connection:
          // non-recognized data-points by typescript here
        }

        interface Document {
          // non-recognized data-points by typescript here
        }

        interface Window {
          // non-recognized data-points by typescript here
        }
      }
    ```
  - The datapoints of the regular collectors and the way to extract them from the browser:
```javascript
// screen width:
const screenWidth = screen.width;
// screen height:
const screenHeight = screen.height;
// language:
const language = navigator.language || navigator.userLanguage;
// userAgent:
const userAgent = navigator.userAgent;
// timezone:
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// CookiesEnabled:
const cookiesEnabled = navigator.cookieEnabled;
// Is Javascript Enabled:
const javaScriptEnabled = typeof navigator.javaEnabled === 'function' && navigator.javaEnabled();
// online status:
const onlineStatus = navigator.onLine;
// page referrer:
const referrer = document.referrer;
// is localStorage enabled:
const localStorageAvailable = typeof(Storage) !== 'undefined';
// network information:
function getNetworkInformation() {
  return new Promise(resolve => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    resolve(connection);
  });
}
// get clipboard:
const clipboard = navigator.clipboard;
// get connection:
const connection = navigator.connection;
// get browser info:
const browserInfo = (function() {
  const ua = navigator.userAgent, tem,
  M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();
// device platform:
const platform = navigator.platform;
// device memory:
const deviceMemory = navigator.deviceMemory || 'unknown';
// hardware concurrency:
const hardwareConcurrency = navigator.hardwareConcurrency;

// example:

class HardwareConcurrency implements Collector<number> {
  public interval: number;
  private data;

  constructor(interval: number) {
    this.interval = interval || DEFAULT_INTERVAL;
  }

  getData() {
    return this.data;
  }

  startCollect() {
    // setInterval for collecting
    this.data = ...
  }

  finishCollect() {

  }

}

// plugins:
const plugins = Array.from(navigator.plugins).map(plugin => plugin.name);
// get geolocation position:
navigator.geolocation.getCurrentPosition((position) => {
  console.log('Geolocation:', position.coords.latitude, position.coords.longitude);
}, (error) => {
  console.log('Geolocation Error:', error.message);
});
// do not track info
const doNotTrack = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
// get battery info:
navigator.getBattery().then(battery => {
  console.log('Battery Level:', battery.level * 100 + '%');
  console.log('Battery Charging:', battery.charging);
});
// current url:
const currentUrl = window.location.href;
// history length:
const historyLength = window.history.length;
// colorDepth:
const colorDepth = screen.colorDepth;
// touchSupport (for browsers running in mobile/tablets):
const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
```

- Type list of data-points for the continous collectors and the way to extract them in the browser:
  - if bufferSize isn't provided - it should use the `DEFAULT_BUFFER_CONTINOUS_COLLECTORS` value from the configuration
```javascript:
// extract mouse move:
// bufferSize - 50 last items
document.addEventListener("mousemove", (mousemoveEvent) => {
  // maintain in the continous collector array the new mousemoveEvent
});
// keyboard pressing:
// bufferSize - 50 last items
document.addEventListener("keyup", (keyupEvent) => {
  // maintain in the continous collector array the new keyupEvent
});
// clicks pressing:
// bufferSize - 10 last items
document.addEventListener("click", (clickEvent) => {
  // maintain in the continous collector array the new click event
});
// get device motion - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
function getDeviceMotion() {
  return new Promise(resolve => {
    window.addEventListener('devicemotion', event => {
      resolve(event);
    }, { once: true });
  });
}
// get device orientation - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
function getDeviceOrientation() {
  return new Promise(resolve => {
    window.addEventListener('deviceorientation', event => {
      resolve(event);
    }, { once: true });
  });
}
```
- The main method should create all the instances of the collector classes, put them in array of collectors of type Collector[], and calling the startCollect() function of each one of them in a loop over the array.
- The main method should perform server update every `COLLECTORS_INTERVAL`, for this - again iterate all the collectors in the array and call the `getData` method.
- It's very recommended to not write everything in 1 file - create different files and use import/export.
- You should build a test_page (very simple, with a few texts and a button to press) - and load your script (the javascript compiled script from your typescript project).
  - Reminder - you complie the code using `tsc` or by another typescript vscode extension
- Bonus for a good error handling during one of the collectors - if one failed - it shouldn't harm the others and return null

Deadline - 01/07/24 00:00

All should be using typescript!
