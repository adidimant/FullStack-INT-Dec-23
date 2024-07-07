import { Collector } from './Collector';

export class BatteryInfoCollector implements Collector<{ level: string; charging: boolean }> {
    public interval: number;
    private data: { level: string; charging: boolean } | null;

    constructor(interval: number) {
        this.interval = interval;
        this.data = null;
    }

    getData(): { level: string; charging: boolean } | null {
        return this.data;
    }

    getKey(): string {
        return 'batteryInfo';
    }

    startCollect(): void {
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
        } else {
            console.error('Battery API not supported');
            this.data = null;
        }
    }

    private updateBatteryData(battery: BatteryManager) {
        this.data = {
            level: `${battery.level * 100}%`,
            charging: battery.charging
        };
    }

    finishCollect(): void {
        this.data = null;
    }
}
