"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryLengthCollector = void 0;
class HistoryLengthCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'historyLength';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting history length:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start history length collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = window.history.length;
        }
        catch (error) {
            console.error('Error getting history length:', error);
            this.data = null;
        }
    }
}
exports.HistoryLengthCollector = HistoryLengthCollector;
