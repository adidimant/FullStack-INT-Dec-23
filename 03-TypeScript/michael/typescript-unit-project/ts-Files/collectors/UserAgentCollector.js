"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAgentCollector = void 0;
class UserAgentCollector {
    constructor() {
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'userAgent';
    }
    startCollect() {
        this.data = navigator.userAgent;
    }
    finishCollect() {
        this.data = null;
    }
}
exports.UserAgentCollector = UserAgentCollector;
