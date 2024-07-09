"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationCollector = void 0;
class GeolocationCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'geolocation';
    }
    startCollect() {
        this.intervalId = window.setInterval(() => {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.data = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                }, (error) => {
                    console.error('Error collecting geolocation data:', error);
                    this.data = null;
                });
            }
            catch (error) {
                console.error('Error collecting geolocation data:', error);
                this.data = null;
            }
        }, this.interval);
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.GeolocationCollector = GeolocationCollector;
