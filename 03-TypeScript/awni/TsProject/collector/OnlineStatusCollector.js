"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineStatusCollector = void 0;
var OnlineStatusCollector = /** @class */ (function () {
    function OnlineStatusCollector(interval) {
        this.interval = interval || 60000;
    }
    OnlineStatusCollector.prototype.getData = function () {
        return this.data;
    };
    OnlineStatusCollector.prototype.getKey = function () {
        return 'onlineStatus';
    };
    OnlineStatusCollector.prototype.startCollect = function () {
        this.data = navigator.onLine;
    };
    OnlineStatusCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return OnlineStatusCollector;
}());
exports.OnlineStatusCollector = OnlineStatusCollector;
