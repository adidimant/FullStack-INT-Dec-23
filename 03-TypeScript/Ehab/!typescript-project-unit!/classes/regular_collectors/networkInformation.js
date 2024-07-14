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
exports.networkInformation = void 0;
const eventsManager_1 = require("../../classes/eventsManager");
class networkInformation {
    constructor() {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        this.intervalId = 0;
    }
    getData() {
        return JSON.parse(JSON.stringify(this.data));
    }
    getKey() {
        return 'networkInformation';
    }
    collectData() {
        return __awaiter(this, void 0, void 0, function* () {
            let connection = yield new Promise((resolve) => {
                resolve(navigator.connection || navigator.mozConnection || navigator.webkitConnection);
            });
            let temp = {
                'onchange': connection['onchange'],
                'effectiveType': connection['effectiveType'],
                'rtt': connection['rtt'],
                'downlink': connection['downlink'],
                'saveData': connection['saveData']
            };
            this.data = JSON.stringify(temp);
        });
    }
    startCollect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (eventsManager_1.EventsManager.IsEnabled) {
                this.collectData();
                this.interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    this.collectData();
                }), this.interval);
            }
        });
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.networkInformation = networkInformation;
