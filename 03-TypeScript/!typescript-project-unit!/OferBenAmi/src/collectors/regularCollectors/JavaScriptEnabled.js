"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptEnabled = void 0;
const classes_1 = require("../../classes");
class JavaScriptEnabled {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `JavaScriptEnabled`;
    }
    startCollect() {
        var _a;
        this.data.push([typeof navigator.javaEnabled === 'function' && navigator.javaEnabled(), Date.now()]);
        document.querySelector('#JavaScriptEnabled-div').textContent = (_a = (String(typeof navigator.javaEnabled === 'function' && navigator.javaEnabled()))) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.JavaScriptEnabled = JavaScriptEnabled;
