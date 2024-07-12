"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformCollector = void 0;
var PlatformCollector = /** @class */ (function () {
    function PlatformCollector(interval) {
        this.interval = interval || 60000;
    }
    PlatformCollector.prototype.getData = function () {
        return this.data;
    };
    PlatformCollector.prototype.getKey = function () {
        return 'platform';
    };
    PlatformCollector.prototype.startCollect = function () {
        this.data = navigator.platform;
    };
    PlatformCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return PlatformCollector;
}());
exports.PlatformCollector = PlatformCollector;
