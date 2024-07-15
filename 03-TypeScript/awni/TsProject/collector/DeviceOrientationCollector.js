"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceOrientationCollector = void 0;
var Utils_1 = require("./Utils");
var DeviceOrientationCollector = /** @class */ (function () {
    function DeviceOrientationCollector(interval, bufferSize) {
        this.interval = interval || 60000;
        this.bufferSize = bufferSize || 40;
    }
    DeviceOrientationCollector.prototype.getData = function () {
        return this.data;
    };
    DeviceOrientationCollector.prototype.getKey = function () {
        return 'deviceOrientation';
    };
    DeviceOrientationCollector.prototype.startCollect = function () {
        var _this = this;
        window.addEventListener('deviceorientation', function (event) {
            _this.data = Utils_1.Utils.maintainLastXItems(_this.data, _this.bufferSize, event);
        }, { once: true });
    };
    DeviceOrientationCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    DeviceOrientationCollector.prototype.getLastItems = function () {
        return this.data;
    };
    return DeviceOrientationCollector;
}());
exports.DeviceOrientationCollector = DeviceOrientationCollector;
