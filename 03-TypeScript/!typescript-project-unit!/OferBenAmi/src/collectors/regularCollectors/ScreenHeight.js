"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenHeight = void 0;
const classes_1 = require("../../classes");
class ScreenHeight {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `ScreenHeight`;
    }
    startCollect() {
        var _a;
        this.data.push([screen.height, Date.now()]);
        document.querySelector('#ScreenHeight-div').textContent = (_a = (String(screen.height))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() { }
}
exports.ScreenHeight = ScreenHeight;
