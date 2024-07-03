import { Collector } from './Collector';

export class LocalStorageAvailableCollector implements Collector<boolean> {
    private data: boolean | null = null;
    private intervalId: number | null = null;
    private interval: number;

    constructor(interval: number = 60000) {
        this.interval = interval;
    }

    getData(): boolean | null {
        return this.data;
    }

    getKey(): string {
        return 'localStorageAvailable';
    }

    startCollect(): void {
        this.intervalId = window.setInterval(() => {
            try {
                this.data = typeof(Storage) !== 'undefined';
            } catch (error) {
                console.error('Error collecting local storage availability:', error);
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
