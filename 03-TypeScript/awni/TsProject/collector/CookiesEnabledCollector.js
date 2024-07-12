"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesEnabledCollector = void 0;
var CookiesEnabledCollector = /** @class */ (function () {
    function CookiesEnabledCollector(interval) {
        this.interval = interval || 60000;
    }
    CookiesEnabledCollector.prototype.getData = function () {
        return this.data;
    };
    CookiesEnabledCollector.prototype.getKey = function () {
        return 'cookiesEnabled';
    };
    CookiesEnabledCollector.prototype.startCollect = function () {
        this.data = navigator.cookieEnabled;
    };
    CookiesEnabledCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return CookiesEnabledCollector;
}());
exports.CookiesEnabledCollector = CookiesEnabledCollector;
