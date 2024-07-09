"use strict";
/*TypeScript Unit Project - INT
Michael Ashkenazi

Hey Adi,
I hope I did it right. It was very difficult for me to understand the requirements because I missed some of the TypeScript lessons, but I did my best.
Data sources I used: Stack Overflow, Google, Udemy, YouTube.
The most challenging part for me was assembling everything together. */
class Utils {
    static maintainLastXItems(arr, maxSize, newItem) {
        if (arr.length >= maxSize) {
            arr.shift();
        }
        arr.push(newItem);
    }
}
class Config {
    constructor(interval, bufferSize, sdkEnabled) {
        this.COLLECTORS_INTERVAL = interval;
        this.DEFAULT_BUFFER_CONTINOUS_COLLECTORS = bufferSize;
        this.SDK_ENABLED = sdkEnabled;
    }
}
// for some reason when i try to make a class EVENT MANAGER and i put the GET CONFIG METHOD inside of it its shows erros wich i wasnt able to solve .
function getConfig(customerId) {
    // check if i have it on local storage
    /*   let currentConfig = localStorage.getItem('config')
       if (currentConfig) {
         // if i have it - return it
         return JSON.parse(currentConfig)
       }*/
    // if i don't have it - fetch it from the server
    //fetching from "https://acme-server.com/conf"
    let config = {
        COLLECTORS_INTERVAL: 60000,
        DEFAULT_BUFFER_CONTINOUS_COLLECTORS: 10,
        SDK_ENABLED: true
    };
    // localStorage.setItem('config', JSON.stringify(config))
    return config;
}
class ScreenWidthCollector {
    constructor(interval, key) {
        this.closed = false;
        this.interval = interval;
        this.key = key;
        this.data = null;
    }
    // getData() - returns the data of the collector
    getData() {
        if (this.closed) {
            return null;
        }
        return this.data;
    }
    //getKey() - returns the string name of the collector (for example 'screenWidth')
    // you should call this method to get the relevant key for the final object that you build from all the collectors, when you do a loop over all the Collectors.
    getKey() {
        return this.key;
    }
    //startCollect() - method that starts collecting, basically you should start a setInterval that every interval time - update the data of the collector class.
    startCollect() {
        this.closed = false;
        this.runningInterval = setInterval(() => {
            fetch('https://acme-server.com/conf')
                .then(response => response.json())
                .then(responseData => this.data = responseData);
        }, this.interval);
    }
    finishCollect() {
        clearInterval(this.runningInterval);
        this.closed = true;
    }
}
class ScreenLenthCollector {
    constructor(interval, key) {
        this.closed = false;
        this.interval = interval;
        this.key = key;
        this.data = null;
    }
    getData() {
        if (this.closed) {
            return null;
        }
        return this.data;
    }
    getKey() {
        return this.key;
    }
    startCollect() {
        console.log("starting");
        this.closed = false;
        this.runningInterval = setInterval(() => {
            fetch('https://acme-server.com/conf')
                .then(response => response.json())
                .then(responseData => this.data = responseData);
        }, this.interval);
    }
    //finishCollect() - method that finish collecting, will be callsed in case of an emergency. in case of calling getData after calling the finishCollect - the getData should return null.
    finishCollect() {
        clearInterval(this.runningInterval);
        this.closed = true;
    }
}
/*
if SDK_ENABLED
More then 20 different browser collectors, each collector is a class that implements this Collector interface.
You should put the relevant generic type T in the class, for example: class ScreenWidthCollector implements Collector<number> { // class content here }
 
There are two types of collectors - continuos collectors & regular collectors
Regular collector is a class that just implements Collector
ContinousCollector - another generic interface that has also bufferSize?: number. if a collector is a ContinousCollector - it should implement both Collector and ContinousCollector interfaces!!
ContinousCollector holds an array of last items with the length of up to bufferSize (of DEFAULT_BUFFER_CONTINOUS_COLLECTORS if not provided)
The bufferSize is an optional value, it means how many last data-snapshots from the data-points it should keep in the array.
You should understand the other types of each collector and use it (you might need to import the relevant type)
*/
// method that listens to the custom "acme-sdk-loaded" event and activate the sdk collection.
function main() {
    let config = getConfig("1234");
    // if not enabled do nothing and return console message
    if (!config.SDK_ENABLED) {
        return console.log("SDK is not enabled");
    }
    else {
        // if enabled - start all the collectors
        let sceenWith = new ScreenWidthCollector(config.COLLECTORS_INTERVAL, 'screenWidth');
        let screenLength = new ScreenLenthCollector(config.COLLECTORS_INTERVAL, 'screenLength');
        let colletorsArray = [sceenWith, screenLength];
        //start all colectors
        for (let collector of colletorsArray) {
            console.log("start a collector");
            collector.startCollect();
        }
        // get data
        for (let collector of colletorsArray) {
            console.log(collector.getData());
        }
    }
}
main();
/* by running this on Ts PlayGround (https://www.typescriptlang.org/play/) the logs i got is :
[LOG]: "start a collector"
[LOG]: "start a collector"
[LOG]: "starting"
[LOG]: null
[LOG]: null
no Errors
*/
