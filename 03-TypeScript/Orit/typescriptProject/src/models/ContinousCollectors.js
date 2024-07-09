"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidth = void 0;
// A class to monitor the screen width the user's device:
class ScreenWidth {
    constructor(key, SDK_ENABLED, interval, bufferSize) {
        this.interval = interval || DEFAULT_INTERVAL;
        this.SDK_ENABLED = SDK_ENABLED;
        this.key = key;
        this.data = null; // initializing the data to null when the class is first assigned.
        this.collectionInterval = null; // initializing the data to null when the class is first assigned.
        this.bufferSize = bufferSize; // continuous collector
    }
    getData() {
        return this.data;
    }
    startCollect() {
        // setInterval for collecting
        if (this.SDK_ENABLED) {
            this.collectionInterval = window.setInterval(() => {
                this.data = screen.width;
                console.log('Collected data.');
                // TODO: push to array!
                // TODO: use utils function!
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
exports.ScreenWidth = ScreenWidth;
// screen height:
const screenHeight = screen.height;
