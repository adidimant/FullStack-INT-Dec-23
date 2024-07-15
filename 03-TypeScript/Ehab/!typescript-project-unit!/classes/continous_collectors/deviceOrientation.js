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
exports.deviceOrientation = void 0;
const utils_1 = require("../utils");
const eventsManager_1 = require("../../classes/eventsManager");
class deviceOrientation {
    constructor(bufferSize) {
        const confInterval = eventsManager_1.EventsManager.getInterval();
        this.interval = confInterval;
        this.data = null;
        if (bufferSize) {
            this.bufferSize = bufferSize;
        }
        else {
            this.bufferSize = eventsManager_1.EventsManager.getDefaultBufferContinousCcollectors();
        }
        this.collectorArray = new Array();
        this.intervalId = 0;
    }
    getData() {
        if (this.collectorArray.length < 1) {
            return null;
        }
        return this.collectorArray;
    }
    getKey() {
        return 'deviceOrientation';
    }
    collectData() {
        return __awaiter(this, void 0, void 0, function* () {
            let resolve = yield new Promise((resolve) => {
                window.addEventListener('deviceorientation', event => {
                    resolve(event);
                }, { once: true });
            });
            if (resolve) {
                let temp = {
                    'Absolute': resolve.absolute,
                    'Alpha': resolve.alpha,
                    'Beta': resolve.beta,
                    'Gamma': resolve.gamma
                };
                this.data = temp;
            }
        });
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.collectData();
                this.intervalId = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    if (this.data) {
                        utils_1.Utils.maintainLastXItems(this.collectorArray, this.bufferSize, this.data);
                        this.data = null;
                    }
                }), this.interval);
            }
            catch (error) {
                this.data = null;
            }
        }
    }
    finishCollect() {
        try {
            if (this.intervalId !== null && this.intervalId !== undefined && !eventsManager_1.EventsManager.IsEnabled) {
                clearInterval(this.intervalId);
                this.data = null;
                this.collectorArray = [];
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.deviceOrientation = deviceOrientation;
