"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referrer = void 0;
const classes_1 = require("../../classes");
class Referrer {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `Referrer`;
    }
    startCollect() {
        var _a;
        this.data.push([document.referrer, Date.now()]);
        document.querySelector('#Referrer-div').textContent = (_a = (document.referrer)) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.Referrer = Referrer;
