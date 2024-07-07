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
exports.DeviceMotionCollector = void 0;
class DeviceMotionCollector {
    constructor(interval, bufferSize = 40) {
        this.intervalId = null;
        this.interval = interval;
        this.bufferSize = bufferSize;
        this.data = [];
    }
    getData() {
        return this.data.length > 0 ? this.data[this.data.length - 1] : null;
    }
    getKey() {
        return 'deviceMotion';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            this.getDeviceMotion().then(event => {
                try {
                    if (this.data.length >= this.bufferSize) {
                        this.data.shift();
                    }
                    this.data.push(event);
                    console.log('Device motion event collected:', event);
                }
                catch (error) {
                    console.error('Error collecting device motion event:', error);
                    this.data.push(null);
                }
            });
        }, this.interval);
    }
    getDeviceMotion() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                window.addEventListener('devicemotion', event => {
                    resolve(event);
                }, { once: true });
            });
        });
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = [];
    }
}
exports.DeviceMotionCollector = DeviceMotionCollector;
