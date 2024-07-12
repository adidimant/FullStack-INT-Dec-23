import { Collector } from './Collector-Interface';



export class DeviceMemoryCollector implements Collector<string> {
    public interval: number;
    private data: string;

    constructor(interval: number) {
        this.interval = interval || 60000;
    }

    getData(): string {
        return this.data;
    }

    getKey(): string {
        return 'deviceMemory';
    }

    startCollect(): void {
        this.data = navigator.deviceMemory || 'unknown';
    }

    finishCollect(): void {
        this.data = null;
    }

}
