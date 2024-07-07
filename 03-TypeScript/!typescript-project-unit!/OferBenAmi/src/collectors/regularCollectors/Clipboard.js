"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clipboard = void 0;
const classes_1 = require("../../classes");
class Clipboard {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `Clipboard`;
    }
    startCollect() {
        var _a;
        this.data.push([navigator.clipboard, Date.now()]);
        document.querySelector('#Clipboard-div').textContent = (_a = JSON.stringify(navigator.clipboard)) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.Clipboard = Clipboard;
