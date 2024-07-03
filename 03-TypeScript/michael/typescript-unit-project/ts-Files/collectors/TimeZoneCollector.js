"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneCollector = void 0;
class TimeZoneCollector {
    constructor() {
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'timeZone';
    }
    startCollect() {
        this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    finishCollect() {
        this.data = null;
    }
}
exports.TimeZoneCollector = TimeZoneCollector;
