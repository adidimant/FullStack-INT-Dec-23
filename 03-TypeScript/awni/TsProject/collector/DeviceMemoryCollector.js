"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceMemoryCollector = void 0;
var DeviceMemoryCollector = /** @class */ (function () {
    function DeviceMemoryCollector(interval) {
        this.interval = interval || 60000;
    }
    DeviceMemoryCollector.prototype.getData = function () {
        return this.data;
    };
    DeviceMemoryCollector.prototype.getKey = function () {
        return 'deviceMemory';
    };
    DeviceMemoryCollector.prototype.startCollect = function () {
        this.data = navigator.deviceMemory || 'unknown';
    };
    DeviceMemoryCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return DeviceMemoryCollector;
}());
exports.DeviceMemoryCollector = DeviceMemoryCollector;
