"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doNotTrack = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class doNotTrack {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'doNotTrack';
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.data = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1";
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.msDoNotTrack === "1";
                }, this.interval);
            }
            catch (err) {
                this.data = null;
            }
        }
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.doNotTrack = doNotTrack;
