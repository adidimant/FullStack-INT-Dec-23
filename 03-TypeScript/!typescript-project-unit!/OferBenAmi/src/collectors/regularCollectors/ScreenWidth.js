"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenWidth = void 0;
const classes_1 = require("../../classes");
class ScreenWidth {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `ScreenWidth`;
    }
    startCollect() {
        var _a;
        this.data.push([screen.width, Date.now()]);
        document.querySelector('#ScreenWidth-div').textContent = (_a = (String(screen.width))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() { }
}
exports.ScreenWidth = ScreenWidth;
