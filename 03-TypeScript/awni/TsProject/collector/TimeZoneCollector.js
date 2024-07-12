"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneCollector = void 0;
var TimeZoneCollector = /** @class */ (function () {
    function TimeZoneCollector(interval) {
        this.interval = interval || 60000;
    }
    TimeZoneCollector.prototype.getData = function () {
        return this.data;
    };
    TimeZoneCollector.prototype.getKey = function () {
        return 'timeZone';
    };
    TimeZoneCollector.prototype.startCollect = function () {
        this.data = Intl.DateTimeFormat().resolvedOptions().timeZone;
    };
    TimeZoneCollector.prototype.finishCollect = function () {
        this.data = '';
    };
    return TimeZoneCollector;
}());
exports.TimeZoneCollector = TimeZoneCollector;
