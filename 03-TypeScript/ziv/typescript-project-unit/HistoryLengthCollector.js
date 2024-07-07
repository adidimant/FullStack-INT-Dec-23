"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryLengthCollector = void 0;
class HistoryLengthCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'historyLength';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = window.history.length;
            }
            catch (error) {
                console.error('Error collecting history length data:', error);
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
exports.HistoryLengthCollector = HistoryLengthCollector;
