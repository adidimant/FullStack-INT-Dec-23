"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageAvailable = void 0;
const classes_1 = require("../../classes");
class LocalStorageAvailable {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `LocalStorageAvailable`;
    }
    startCollect() {
        var _a;
        this.data.push([typeof (Storage) !== 'undefined', Date.now()]);
        document.querySelector('#LocalStorageAvailable-div').textContent = (_a = (String(typeof (Storage) !== 'undefined'))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.LocalStorageAvailable = LocalStorageAvailable;
