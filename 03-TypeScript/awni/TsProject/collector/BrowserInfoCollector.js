"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserInfoCollector = void 0;
var BrowserInfoCollector = /** @class */ (function () {
    function BrowserInfoCollector(interval) {
        this.interval = interval || 60000;
    }
    BrowserInfoCollector.prototype.getData = function () {
        return this.data;
    };
    BrowserInfoCollector.prototype.getKey = function () {
        return 'browserInfo';
    };
    BrowserInfoCollector.prototype.startCollect = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            this.data = 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) {
                this.data = tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        this.data = M.join(' ');
    };
    BrowserInfoCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return BrowserInfoCollector;
}());
exports.BrowserInfoCollector = BrowserInfoCollector;
