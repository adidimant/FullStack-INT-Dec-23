"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageAvailableCollector = void 0;
class LocalStorageAvailableCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'localStorageAvailable';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting local storage availability:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start local storage availability collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            this.data = true;
        }
        catch (error) {
            console.error('Error checking local storage availability:', error);
            this.data = false;
        }
    }
}
exports.LocalStorageAvailableCollector = LocalStorageAvailableCollector;
