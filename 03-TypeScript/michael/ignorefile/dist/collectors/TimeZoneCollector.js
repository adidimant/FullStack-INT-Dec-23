"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneCollector = void 0;
var TimeZoneCollector = /** @class */ (function () {
    function TimeZoneCollector() {
        this.data = null;
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
        this.data = null;
    };
    return TimeZoneCollector;
}());
exports.TimeZoneCollector = TimeZoneCollector;
