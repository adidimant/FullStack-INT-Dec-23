"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwareConcurrencyCollector = void 0;
class HardwareConcurrencyCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'hardwareConcurrency';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting hardware concurrency:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start hardware concurrency collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.hardwareConcurrency;
        }
        catch (error) {
            console.error('Error getting hardware concurrency:', error);
            this.data = null;
        }
    }
}
exports.HardwareConcurrencyCollector = HardwareConcurrencyCollector;
