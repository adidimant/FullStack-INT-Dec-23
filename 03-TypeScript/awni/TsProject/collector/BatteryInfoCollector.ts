
import { Collector } from './Collector-Interface';


export class BatteryInfoCollector implements Collector<any> {
    public interval: number;
    private data: any;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): any {
        return this.data;
    }

    getKey(): string {
        return 'batteryInfo';
    }

    startCollect(): void {
        navigator.getBattery().then(battery => {
            this.data = battery;
        });
    }

    finishCollect(): void {
        this.data = null;
    }

}