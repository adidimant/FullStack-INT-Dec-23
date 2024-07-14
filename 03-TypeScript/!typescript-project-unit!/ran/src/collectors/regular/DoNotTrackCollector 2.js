"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoNotTrackCollector = void 0;
class DoNotTrackCollector {
    constructor(interval) {
        this.data = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'doNotTrack';
    }
    startCollect() {
        try {
            this.collectData();
            setInterval(() => {
                try {
                    this.collectData();
                }
                catch (error) {
                    console.error('Error collecting Do Not Track status:', error);
                    this.data = null;
                }
            }, this.interval);
        }
        catch (error) {
            console.error('Failed to start Do Not Track collection:', error);
        }
    }
    finishCollect() {
        this.data = null;
    }
    collectData() {
        try {
            this.data = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        }
        catch (error) {
            console.error('Error getting Do Not Track status:', error);
            this.data = null;
        }
    }
}
exports.DoNotTrackCollector = DoNotTrackCollector;
