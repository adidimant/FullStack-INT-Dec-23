import { Utils } from '../utils/Utils.js';
import { EventsManager } from "./eventsManager.js";
const config = EventsManager.getConfig();
// A class to monitor the mouse moves:
// bufferSize - 50 last items
export class MouseMoveCollector {
    constructor(bufferSize) {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = []; // initializing the data to empty array when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
        this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (this.SDK_ENABLED) {
            document.addEventListener("mousemove", (mousemoveEvent) => {
                if (mousemoveEvent) {
                    this.data = Utils.maintainLastXItems(this.data, this.bufferSize, mousemoveEvent);
                    EventsManager.addCollectorData(this);
                }
            });
            this.collectionInterval = window.setInterval(() => {
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = Utils.maintainLastXItems(this.data, this.bufferSize, null);
        EventsManager.addCollectorData(this);
    }
}
// A class to monitor keyboard pressing:
// bufferSize - 50 last items
export class KeyboardPressingCollector {
    constructor(bufferSize) {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = []; // initializing the data to empty array when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
        this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (this.SDK_ENABLED) {
            document.addEventListener("keyup", (keyupEvent) => {
                if (keyupEvent) {
                    this.data = Utils.maintainLastXItems(this.data, this.bufferSize, keyupEvent);
                    EventsManager.addCollectorData(this);
                }
            });
            this.collectionInterval = window.setInterval(() => {
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = Utils.maintainLastXItems(this.data, this.bufferSize, null);
        EventsManager.addCollectorData(this);
    }
}
// A class to monitor clicks:
// bufferSize - 10 last items
export class ClicksCollector {
    constructor(bufferSize) {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = []; // initializing the data to empty array when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
        this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    startCollect() {
        if (this.SDK_ENABLED) {
            document.addEventListener("click", (clickEvent) => {
                if (clickEvent) {
                    this.data = Utils.maintainLastXItems(this.data, this.bufferSize, clickEvent);
                    EventsManager.addCollectorData(this);
                }
            });
            this.collectionInterval = window.setInterval(() => {
                EventsManager.addCollectorData(this);
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = Utils.maintainLastXItems(this.data, this.bufferSize, null);
        EventsManager.addCollectorData(this);
    }
}
// A class to monitor device motion - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
export class DeviceMotionCollector {
    constructor(bufferSize) {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = []; // initializing the data to empty array when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
        this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    // Function to check if the device is a mobile device
    isMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    }
    getDeviceMotion() {
        return new Promise((resolve, reject) => {
            if (this.isMobileDevice()) {
                reject(new Error('Device motion not supported on non-mobile devices.'));
                return;
            }
            window.addEventListener('devicemotion', event => {
                resolve(event);
            }, { once: true });
        });
    }
    startCollect() {
        if (this.SDK_ENABLED) {
            this.getDeviceMotion()
                .then(event => {
                this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
                EventsManager.addCollectorData(this);
            })
                .catch(error => {
                console.error('Error retrieving device motion data:', error.message);
            });
            this.collectionInterval = window.setInterval(() => {
                this.getDeviceMotion()
                    .then(event => {
                    this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
                    EventsManager.addCollectorData(this);
                })
                    .catch(error => {
                    console.error('Error retrieving device motion data:', error.message);
                });
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = Utils.maintainLastXItems(this.data, this.bufferSize, null);
        EventsManager.addCollectorData(this);
    }
}
// A class to monitor device orientation - mobile (will success in browsers over mobile devices):
// bufferSize - last 40 items
export class DeviceOrientationCollector {
    constructor(bufferSize) {
        this.interval = config.COLLECTORS_INTERVAL;
        this.SDK_ENABLED = config.SDK_ENABLED;
        this.key = this.constructor.name;
        this.data = []; // initializing the data to empty array when the class is first assigned.
        this.collectionInterval = null; // initializing the collectionInterval ID to null when the class is first assigned.
        this.bufferSize = bufferSize != undefined ? bufferSize : config.DEFAULT_BUFFER_CONTINUOUS_COLLECTORS;
    }
    getKey() {
        return this.key;
    }
    getData() {
        return this.data;
    }
    // Function to check if the device is a mobile device
    isMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    }
    getDeviceOrientation() {
        return new Promise((resolve, reject) => {
            if (this.isMobileDevice()) {
                reject(new Error('Device oreientaation not supported on non-mobile devices.'));
                return;
            }
            window.addEventListener('deviceorientation', event => {
                resolve(event);
            }, { once: true });
        });
    }
    startCollect() {
        if (this.SDK_ENABLED) {
            this.getDeviceOrientation()
                .then(event => {
                this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
                EventsManager.addCollectorData(this);
            })
                .catch(error => {
                console.error('Error retrieving device motion data:', error.message);
            });
            this.collectionInterval = window.setInterval(() => {
                this.getDeviceOrientation()
                    .then(event => {
                    this.data = Utils.maintainLastXItems(this.data, this.bufferSize, event);
                    EventsManager.addCollectorData(this);
                    console.log('Collected device motion data:', event);
                })
                    .catch(error => {
                    console.error('Error retrieving device motion data:', error.message);
                });
            }, this.interval);
        }
    }
    finishCollect() {
        if (this.collectionInterval != null) {
            clearInterval(this.collectionInterval);
            this.collectionInterval = null;
        }
        this.data = Utils.maintainLastXItems(this.data, this.bufferSize, null);
        EventsManager.addCollectorData(this);
    }
}
