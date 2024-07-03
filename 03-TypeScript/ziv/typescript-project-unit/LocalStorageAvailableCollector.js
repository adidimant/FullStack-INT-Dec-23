"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageAvailableCollector = void 0;
class LocalStorageAvailableCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'localStorageAvailable';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = typeof (Storage) !== 'undefined';
            }
            catch (error) {
                console.error('Error collecting local storage availability:', error);
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
exports.LocalStorageAvailableCollector = LocalStorageAvailableCollector;
