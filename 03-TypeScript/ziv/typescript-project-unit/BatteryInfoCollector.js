"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatteryInfoCollector = void 0;
class BatteryInfoCollector {
    constructor(interval) {
        this.interval = interval;
        this.data = null;
    }
    getData() {
        return this.data;
    }
    getKey() {
        return 'batteryInfo';
    }
    startCollect() {
        if (navigator.getBattery) {
            navigator.getBattery().then(battery => {
                this.updateBatteryData(battery);
                battery.addEventListener('levelchange', () => {
                    this.updateBatteryData(battery);
                });
                battery.addEventListener('chargingchange', () => {
                    this.updateBatteryData(battery);
                });
            }).catch(error => {
                console.error('Error collecting battery info:', error);
                this.data = null;
            });
        }
        else {
            console.error('Battery API not supported');
            this.data = null;
        }
    }
    updateBatteryData(battery) {
        this.data = {
            level: `${battery.level * 100}%`,
            charging: battery.charging
        };
    }
    finishCollect() {
        this.data = null;
    }
}
exports.BatteryInfoCollector = BatteryInfoCollector;
