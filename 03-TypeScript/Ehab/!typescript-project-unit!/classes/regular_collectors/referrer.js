"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referrer = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class referrer {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        if (typeof this.data === 'string' && this.data.length == 0) {
            return "' '";
        }
        return this.data;
    }
    getKey() {
        return 'referrer';
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.data = document.referrer;
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.data = document.referrer;
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
exports.referrer = referrer;
