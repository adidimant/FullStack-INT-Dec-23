"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
const classes_1 = require("../../classes");
class Language {
    constructor(interval) {
        this.data = [];
        this.interval = interval !== null && interval !== void 0 ? interval : classes_1.EventsManager.getConfig().COLLECTORS_INTERVAL;
    }
    getData() {
        return this.data.length > 0 ? this.data : null;
    }
    getKey() {
        return `Language`;
    }
    startCollect() {
        var _a;
        this.data.push([navigator.language || navigator.userLanguage, Date.now()]);
        document.querySelector('#language-div').textContent = (_a = (navigator.language || navigator.userLanguage)) !== null && _a !== void 0 ? _a : "";
    }
    finishCollect() {
    }
}
exports.Language = Language;
