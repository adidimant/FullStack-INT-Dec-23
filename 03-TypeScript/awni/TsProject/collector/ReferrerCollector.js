"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferrerCollector = void 0;
var ReferrerCollector = /** @class */ (function () {
    function ReferrerCollector(interval) {
        this.interval = interval || 60000;
    }
    ReferrerCollector.prototype.getData = function () {
        return this.data;
    };
    ReferrerCollector.prototype.getKey = function () {
        return 'referrer';
    };
    ReferrerCollector.prototype.startCollect = function () {
        this.data = document.referrer;
    };
    ReferrerCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return ReferrerCollector;
}());
exports.ReferrerCollector = ReferrerCollector;
