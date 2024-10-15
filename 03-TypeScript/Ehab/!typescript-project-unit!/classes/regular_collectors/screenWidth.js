"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export { _screenWidth as screenWidth };
import { EventsManager } from "../../classes/eventsManager";
class screenWidth {
    constructor() {
        const confInterval = EventsManager.getInterval();
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
        if (!EventsManager.IsEnabled) {
            this.finishCollect();
            return;
        }
        if (EventsManager.IsEnabled) {
            try {
                this.data = screen.width;
                this.intervalId = setInterval(() => {
                    if (!EventsManager.IsEnabled) {
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
        if (this.intervalId !== null && this.intervalId !== undefined && !EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
const _screenWidth = screenWidth;
export { _screenWidth as screenWidth };
