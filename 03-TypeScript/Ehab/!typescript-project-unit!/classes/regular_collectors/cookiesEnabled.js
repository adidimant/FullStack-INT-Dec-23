"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookiesEnabled = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class cookiesEnabled {
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
        return 'cookiesEnabled';
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.data = navigator.cookieEnabled;
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.data = navigator.cookieEnabled;
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
exports.cookiesEnabled = cookiesEnabled;
