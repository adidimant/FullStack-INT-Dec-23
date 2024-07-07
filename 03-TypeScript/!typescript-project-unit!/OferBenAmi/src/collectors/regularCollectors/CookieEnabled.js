"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieEnabled = void 0;
const classes_1 = require("../../classes");
class CookieEnabled {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `CookieEnabled`;
    }
    startCollect() {
        var _a;
        this.data.push([navigator.cookieEnabled, Date.now()]);
        document.querySelector('#CookieEnabled-div').textContent = (_a = (String(navigator.cookieEnabled))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.CookieEnabled = CookieEnabled;
