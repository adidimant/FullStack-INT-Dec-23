"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInformationCollector = void 0;
var NetworkInformationCollector = /** @class */ (function () {
    function NetworkInformationCollector(interval) {
        this.interval = interval || 60000;
    }
    NetworkInformationCollector.prototype.getData = function () {
        return this.data;
    };
    NetworkInformationCollector.prototype.getKey = function () {
        return 'networkInformation';
    };
    NetworkInformationCollector.prototype.startCollect = function () {
        this.data = navigator.connection;
    };
    NetworkInformationCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return NetworkInformationCollector;
}());
exports.NetworkInformationCollector = NetworkInformationCollector;
