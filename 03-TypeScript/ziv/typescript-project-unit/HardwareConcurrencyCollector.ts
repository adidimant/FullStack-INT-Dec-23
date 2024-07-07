import { Collector } from './Collector';

export class HardwareConcurrencyCollector implements Collector<number | null> {
    private data: number | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): number | null {
        return this.data;
    }

    getKey(): string {
        return 'hardwareConcurrency';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = navigator.hardwareConcurrency || null;
            } catch (error) {
                console.error('Error collecting hardware concurrency data:', error);
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
