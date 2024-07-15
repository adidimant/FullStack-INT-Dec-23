"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlineStatus = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class onlineStatus {
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
        return 'onlineStatus';
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.data = navigator.onLine;
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.onLine;
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
exports.onlineStatus = onlineStatus;
