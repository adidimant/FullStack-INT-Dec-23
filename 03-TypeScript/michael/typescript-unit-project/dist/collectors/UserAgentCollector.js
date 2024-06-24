"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgentCollector = void 0;
var UserAgentCollector = /** @class */ (function () {
    function UserAgentCollector() {
        this.data = null;
    }
    UserAgentCollector.prototype.getData = function () {
        return this.data;
    };
    UserAgentCollector.prototype.getKey = function () {
        return 'userAgent';
    };
    UserAgentCollector.prototype.startCollect = function () {
        this.data = navigator.userAgent;
    };
    UserAgentCollector.prototype.finishCollect = function () {
        this.data = null;
    };
    return UserAgentCollector;
}());
exports.UserAgentCollector = UserAgentCollector;
