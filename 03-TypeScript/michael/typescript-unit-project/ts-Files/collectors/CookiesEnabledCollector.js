"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookiesEnabledCollector = void 0;
class CookiesEnabledCollector {
    constructor() {
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'cookiesEnabled';
    }
    startCollect() {
        this.data = navigator.cookieEnabled;
    }
    finishCollect() {
        this.data = null;
    }
}
exports.CookiesEnabledCollector = CookiesEnabledCollector;
