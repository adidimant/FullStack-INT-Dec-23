"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenWidth = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class screenWidth {
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
        return 'screenWidth';
    }
    startCollect() {
        if (!eventsManager_1.EventsManager.IsEnabled) {
            this.finishCollect();
            return;
        }
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.data = screen.width;
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.data = screen.width;
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
exports.screenWidth = screenWidth;
