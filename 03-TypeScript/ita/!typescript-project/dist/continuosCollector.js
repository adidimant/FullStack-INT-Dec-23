var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Utils } from "./utils.js";
export class Mousemovecollector {
    constructor(intervalTime, bufferSize) {
        this.data = null;
        this.collectInterval = null;
        this.eventArray = [];
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectMouseMove.bind(this);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "mousemove";
    }
    startCollect() {
        this.eventArray = [];
        this.data = null;
        document.addEventListener("mousemove", this.eventListener);
        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]);
            console.log("data", this.data);
        }, this.intervalTime);
    }
    collectMouseMove(event) {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        document.removeEventListener("mousemove", this.eventListener);
        this.data = null;
    }
}
export class Keyupcollector {
    constructor(intervalTime, bufferSize) {
        this.data = null;
        this.collectInterval = null;
        this.eventArray = [];
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectkeyup.bind(this);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "keyup";
    }
    startCollect() {
        this.eventArray = [];
        this.data = null;
        document.addEventListener("keyup", this.eventListener);
        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]);
            console.log("data", this.data);
        }, this.intervalTime);
    }
    collectkeyup(event) {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        document.removeEventListener("keyup", this.eventListener);
        this.data = null;
    }
}
export class Clickcollector {
    constructor(intervalTime, bufferSize) {
        this.data = null;
        this.collectInterval = null;
        this.eventArray = [];
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectclick.bind(this);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "click";
    }
    startCollect() {
        this.eventArray = [];
        this.data = null;
        document.addEventListener("click", this.eventListener);
        this.collectInterval = window.setInterval(() => {
            this.setData([...this.eventArray]);
            console.log("data", this.data);
        }, this.intervalTime);
    }
    collectclick(event) {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class DeviceMotioncollector {
    constructor(intervalTime, bufferSize) {
        this.data = null;
        this.collectInterval = null;
        this.eventArray = [];
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectMotion.bind(this);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "devicemotion";
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
    startCollect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.eventArray = [];
            this.data = null;
            try {
                const initialEvent = yield this.getDeviceMotion();
                this.collectMotion(initialEvent);
            }
            catch (error) {
                console.error("Error initializing device motion collection:", error);
            }
            window.addEventListener('devicemotion', this.eventListener);
            this.collectInterval = window.setInterval(() => {
                this.setData([...this.eventArray]);
                console.log(`DeviceMotion Data updated: `, this.data);
            }, this.intervalTime);
        });
    }
    collectMotion(event) {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
export class DeviceOrientationCollector {
    constructor(intervalTime, bufferSize) {
        this.data = null;
        this.collectInterval = null;
        this.eventArray = [];
        this.intervalTime = intervalTime;
        this.bufferSize = bufferSize;
        this.eventListener = this.collectOrientation.bind(this);
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getKey() {
        return "deviceorientation";
    }
    startCollect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.eventArray = [];
            this.data = null;
            try {
                const initialEvent = yield this.getDeviceOrientation();
                this.collectOrientation(initialEvent);
            }
            catch (error) {
                console.error("Error initializing device orientation collection:", error);
            }
            window.addEventListener('deviceorientation', this.eventListener);
            this.collectInterval = setInterval(() => {
                this.setData([...this.eventArray]);
                console.log(`DeviceOrientation Data updated: `, this.data);
            }, this.intervalTime);
        });
    }
    getDeviceOrientation() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                window.addEventListener('deviceorientation', event => {
                    resolve(event);
                }, { once: true });
            });
        });
    }
    collectOrientation(event) {
        Utils.maintainLastXItems(this.eventArray, this.bufferSize, event);
    }
    finishCollect() {
        if (this.collectInterval) {
            clearInterval(this.collectInterval);
        }
        this.data = null;
    }
}
