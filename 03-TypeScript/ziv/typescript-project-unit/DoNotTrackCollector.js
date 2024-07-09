"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoNotTrackCollector = void 0;
class DoNotTrackCollector {
    constructor(interval) {
        this.intervalId = null;
        this.interval = interval;
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'doNotTrack';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || 'unknown';
            }
            catch (error) {
                console.error('Error collecting do not track data:', error);
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
exports.DoNotTrackCollector = DoNotTrackCollector;
