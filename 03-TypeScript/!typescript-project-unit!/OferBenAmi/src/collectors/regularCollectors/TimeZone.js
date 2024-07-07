"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
const classes_1 = require("../../classes");
class TimeZone {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `TimeZone`;
    }
    startCollect() {
        var _a;
        this.data.push([Intl.DateTimeFormat().resolvedOptions().timeZone, Date.now()]);
        document.querySelector('#TimeZone-div').textContent = (_a = Intl.DateTimeFormat().resolvedOptions().timeZone) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.TimeZone = TimeZone;
