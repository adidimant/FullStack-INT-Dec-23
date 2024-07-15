"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboardPressing = void 0;
const utils_1 = require("../utils");
const eventsManager_1 = require("../../classes/eventsManager");
class keyboardPressing {
    constructor(bufferSize) {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if (bufferSize) {
            this.bufferSize = bufferSize;
        }
        else {
            this.bufferSize = eventsManager_1.EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array();
        this.intervalId = 0;
    }
    getData() {
        if (this.collectorArray.length < 1) {
            return null;
        }
        return this.collectorArray;
    }
    getKey() {
        return 'keyboardPressin';
    }
    collectData() {
        document.addEventListener("keyup", (keyupEvent) => {
            if (keyupEvent) {
                let temp = {
                    'isTrusted': keyupEvent['isTrusted'],
                    'key': keyupEvent['key'],
                    'code': keyupEvent['code'],
                    'location': keyupEvent['location'],
                    'ctrlKey': keyupEvent['ctrlKey']
                };
                this.data = temp;
            }
        });
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.collectData();
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    if (this.data) {
                        utils_1.Utils.maintainLastXItems(this.collectorArray, this.bufferSize, this.data);
                        this.data = null;
                    }
                }, this.interval);
            }
            catch (err) {
                this.data = null;
            }
        }
    }
    finishCollect() {
        try {
            if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
                clearInterval(this.intervalId);
                this.data = null;
                this.collectorArray = [];
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.keyboardPressing = keyboardPressing;
