"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMemory = exports.Platform = exports.HardwareConcurrency = void 0;
const DEFAULT_INTERVAL = 1000; // Default interval in milliseconds
// A class to monitor the number of logical processor cores available on the user's device:
class HardwareConcurrency {
    constructor(key, SDK_ENABLED, interval) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the data to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    startCollect() {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.hardwareConcurrency;
                console.log('Collected data.');
                // TODO: push to array!
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
    getKey() {
        return this.key;
    }
}
exports.HardwareConcurrency = HardwareConcurrency;
// A class to monitor the users device platform:
class Platform {
    constructor(key, SDK_ENABLED, interval) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.key;
    }
    startCollect() {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.platform; //this is depreciated!
                console.log('Collected data.');
                // TODO: push to array!
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
exports.Platform = Platform;
// A class to monitor the users device memory:
class DeviceMemory {
    constructor(key, SDK_ENABLED, interval) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval to null when the class is first assigned.
    }
    getData() {
        return this.data;
    }
    getKey() {
        return this.key;
    }
    startCollect() {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => {
                this.data = navigator.deviceMemory || 'unknown'; // Sometimes does not exist
                console.log('Collected data.');
                // TODO: push to array!
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = null;
    }
}
exports.DeviceMemory = DeviceMemory;
