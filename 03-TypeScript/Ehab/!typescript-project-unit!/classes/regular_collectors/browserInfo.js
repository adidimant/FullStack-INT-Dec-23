"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserInfo = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class browserInfo {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'browserInfo';
    }
    collectData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.data = (function () {
                    let ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident\/?\s)(\d+)/i) || [];
                    if (/trident/i.test(M[1])) {
                        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                        return 'IE ' + (tem[1] || '');
                    }
                    if (M[1] === 'Chrome') {
                        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                        if (tem != null)
                            return tem.slice(1).join(' ').replace('OPR', 'Opera');
                    }
                    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                    if ((tem = ua.match(/version\/(\d+)/i)) != null)
                        M.splice(1, 1, tem[1]);
                    return M.join(' ');
                })();
            }
            catch (error) {
                console.error(error);
                this.data = null;
            }
        });
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            this.collectData();
            this.intervalId = setInterval(() => {
                if (!eventsManager_1.EventsManager.IsEnabled) {
                    this.finishCollect();
                    return;
                }
                this.collectData();
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.browserInfo = browserInfo;
