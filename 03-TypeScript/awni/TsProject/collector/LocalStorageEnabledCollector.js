"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageEnabledCollector = void 0;
var LocalStorageEnabledCollector = /** @class */ (function () {
    function LocalStorageEnabledCollector(interval) {
        this.interval = interval || 60000;
    }
    LocalStorageEnabledCollector.prototype.getData = function () {
        return this.data;
    };
    LocalStorageEnabledCollector.prototype.getKey = function () {
        return 'localStorageEnabled';
    };
    LocalStorageEnabledCollector.prototype.startCollect = function () {
        this.data = typeof (Storage) !== 'undefined';
    };
    LocalStorageEnabledCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return LocalStorageEnabledCollector;
}());
exports.LocalStorageEnabledCollector = LocalStorageEnabledCollector;
