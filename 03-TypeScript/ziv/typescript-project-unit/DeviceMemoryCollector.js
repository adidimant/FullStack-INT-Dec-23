"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMemoryCollector = void 0;
class DeviceMemoryCollector {
    constructor(interval) {
        this.intervalId = null;
        this.interval = interval;
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'deviceMemory';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.deviceMemory ? navigator.deviceMemory.toString() : 'unknown';
            }
            catch (error) {
                console.error('Error collecting device memory data:', error);
                this.data = null;
            }
        }, this.interval);
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.DeviceMemoryCollector = DeviceMemoryCollector;
