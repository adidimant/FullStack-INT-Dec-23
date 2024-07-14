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
exports.deviceMotion = void 0;
const utils_1 = require("../utils");
const eventsManager_1 = require("../../classes/eventsManager");
class deviceMotion {
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
        return 'deviceMotio';
    }
    collectData() {
        return __awaiter(this, void 0, void 0, function* () {
            let resolve = yield new Promise((resolve) => {
                window.addEventListener('devicemotion', event => {
                    resolve(event);
                }, { once: true });
            });
            if (resolve && resolve.acceleration && resolve.accelerationIncludingGravity && resolve.rotationRate) {
                let temp = {
                    'Acceleration along X axis:': resolve.acceleration.x,
                    'Acceleration along Y axis:': resolve.acceleration.y,
                    'Acceleration along Z axis:': resolve.acceleration.z,
                    'Acceleration including gravity along X axis:': resolve.accelerationIncludingGravity.x,
                    'Acceleration including gravity along y axis:': resolve.accelerationIncludingGravity.y,
                    'Acceleration including gravity along z axis:': resolve.accelerationIncludingGravity.z,
                    'Rotation rate around Z axis (alpha):': resolve.rotationRate.alpha,
                    'Rotation rate around X axis (beta):': resolve.rotationRate.beta,
                    'Rotation rate around Y axis (gamma):': resolve.rotationRate.gamma,
                    'Data interval:': resolve.interval
                };
                this.data = temp;
            }
        });
    }
    startCollect() {
        if (eventsManager_1.EventsManager.IsEnabled) {
            try {
                this.collectData();
                this.intervalId = setInterval(() => {
                    if (!eventsManager_1.EventsManager.IsEnabled) {
                        this.finishCollect();
                        return;
                    }
                    if (this.data) {
                        utils_1.Utils.maintainLastXItems(this.collectorArray, this.bufferSize, this.data);
                        this.data = null;
                    }
                }, this.interval);
            }
            catch (err) {
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
exports.deviceMotion = deviceMotion;
