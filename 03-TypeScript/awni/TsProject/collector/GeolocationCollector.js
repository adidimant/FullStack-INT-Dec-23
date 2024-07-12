"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationCollector = void 0;
var GeolocationCollector = /** @class */ (function () {
    function GeolocationCollector(interval) {
        this.interval = interval || 60000;
    }
    GeolocationCollector.prototype.getData = function () {
        return this.data;
    };
    GeolocationCollector.prototype.getKey = function () {
        return 'geolocation';
    };
    GeolocationCollector.prototype.startCollect = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.data = position;
        }, function (error) {
            _this.data = error;
        });
    };
    GeolocationCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return GeolocationCollector;
}());
exports.GeolocationCollector = GeolocationCollector;
