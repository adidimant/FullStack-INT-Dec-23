"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgent = void 0;
const classes_1 = require("../../classes");
class UserAgent {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `UserAgent`;
    }
    startCollect() {
        var _a;
        this.data.push([navigator.userAgent, Date.now()]);
        document.querySelector('#UserAgent-div').textContent = (_a = navigator.userAgent) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.UserAgent = UserAgent;
