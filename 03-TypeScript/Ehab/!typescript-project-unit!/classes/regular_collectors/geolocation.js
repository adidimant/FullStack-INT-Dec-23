"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geolocation = void 0;
class geolocation {
    constructor(interval) {
        this.interval = interval;
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'geolocation';
    }
    startCollect() {
        try {
            let latitude = null;
            let longitude = null;
            this.intervalId = setInterval(() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    this.data = 'Geolocation:', latitude, longitude;
                }, (error) => {
                    this.data = null;
                });
            }, this.interval);
        }
        catch (err) {
            this.data = null;
        }
    }
    finishCollect() {
        if (this.intervalId !== null && this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.data = null;
        }
    }
}
exports.geolocation = geolocation;
