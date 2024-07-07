"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnLine = void 0;
const classes_1 = require("../../classes");
class OnLine {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `OnLine`;
    }
    startCollect() {
        var _a;
        this.data.push([navigator.onLine, Date.now()]);
        document.querySelector('#OnLine-div').textContent = (_a = (String(navigator.onLine))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.OnLine = OnLine;
