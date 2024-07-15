import { Collector } from './Collector';

export class DeviceMemoryCollector implements Collector<string | null> {
    public interval: number;
    private data: string | null;
    private intervalId: number | null = null;

    constructor(interval: number) {
        this.interval = interval;
        this.data = null;
    }

    getData(): string | null {
        return this.data;
    }

    getKey(): string {
        return 'deviceMemory';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.deviceMemory ? navigator.deviceMemory.toString() : 'unknown';
            } catch (error) {
                console.error('Error collecting device memory data:', error);
                this.data = null;
            }
        }, this.interval);
    }

    finishCollect(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.data = null;
    }
}
