"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInformationCollector = void 0;
class NetworkInformationCollector {
    constructor(interval = 60000) {
        this.data = null;
        this.intervalId = null;
        this.interval = interval;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'networkInformation';
    }
    startCollect() {
        this.collectNetworkInformation();
        this.intervalId = window.setInterval(() => {
            this.collectNetworkInformation();
        }, this.interval);
    }
    collectNetworkInformation() {
        try {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                this.data = {
                    downlink: connection.downlink,
                    effectiveType: connection.effectiveType,
                    rtt: connection.rtt,
                    saveData: connection.saveData,
                };
            }
            else {
                this.data = null;
            }
        }
        catch (error) {
            console.error('Error collecting network information:', error);
            this.data = null;
        }
    }
    finishCollect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
exports.NetworkInformationCollector = NetworkInformationCollector;
